import React, { useEffect, useState } from "react";
import { useClient, FormField, set, unset } from "sanity";
import { Stack, Card, Select } from "@sanity/ui";

export const CollectionLinkComponent = ({ value, onChange }: any) => {
  const [navData, setNavData] = useState<any>(null);
  const client = useClient({ apiVersion: "2022-10-25" });

  const query = `*[_type == "navigation"]{
  _id,
  _type,
  name,
  title,
  sections[]{
    title,
    target->{
      _type == "collection" => { _type, "title": store.title, "slug": store.slug.current },
      _type == "page" => { _type, "title": title, "slug": slug.current }
    },
    children[]{
      title,
      target->{
        _type == "collection" => { _type, "title": store.title, "slug": store.slug.current },
        _type == "page" => { _type, "title": title, "slug": slug.current }
      },
      children[]{
        title,
        target->{
          _type == "collection" => {  _type, "title": store.title, "slug": store.slug.current },
          _type == "page" => { _type, "title": title }
        }
      }
    }
  }
}`;

  type Section = {
    children: Section[];
    target: {
      slug: string;
      title: {
        _type: string;
        [key: string]: string;
      };
      _type: string;
    };
    title: string;
  };

  type Link = {
    title: string;
    slug: string;
    fullPath: string;
  };

  const extractLinks = (sections: Section[], parentPath = "") => {
    let links: Link[] = [];
    function traverse(section: Section, currentPath: string) {
      if (section.target?.slug) {
        // Construct full path by appending the current slug
        const fullPath = currentPath
          ? `${currentPath}/${section.target.slug}`
          : section.target.slug;
        links.push({
          title: section.title,
          slug: section.target.slug,
          fullPath: fullPath,
        });
        // If the section has children, recursively process them with updated path
        if (Array.isArray(section.children)) {
          section.children.forEach(child => traverse(child, fullPath));
        }
      }
    }
    // Iterate through all top-level sections
    sections.forEach(section => traverse(section, parentPath));
    return links;
  };

  useEffect(() => {
    client.fetch(query, {}).then(setNavData);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const navLinks = extractLinks(navData[0].sections);
    const selectedSlug = event.target.value;
    const selectedLink =
      navLinks.find(link => link.slug === selectedSlug) || null;

    onChange(selectedLink ? set(selectedLink) : unset());
  };

  if (navData) {
    const navLinks = extractLinks(navData[0].sections);
    if (!navLinks) return;
    return (
      <FormField title="Select Navigation Links">
        {/* <Card> */}
        {/* <Stack> */}
        <Select
          onChange={handleSelectChange}
          value={value?.slug || ""}
          fontSize={1}
          padding={[3, 3, 4]}
          space={[3, 3, 4]}
        >
          <option value="">-- Select a Link --</option>
          {navLinks.map(link => (
            <option key={link.slug} value={link.slug}>
              {link.title} ({link.fullPath})
            </option>
          ))}
        </Select>
        {/* </Stack> */}
        {/* </Card> */}
      </FormField>
    );
  }
};
