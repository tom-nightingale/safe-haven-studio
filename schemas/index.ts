// Object types
import seo from "./objects/Seo";
import link from "./objects/Link";
import blockContent from "./objects/BlockContent";
import imageBlock from "./objects/ImageBlock";
import twoImageHeroBlock from "./objects/ContentBlocks/TwoImageHero/TwoImageHeroBlock";
import NavigationSection from "./objects/Navigation/Section";
import NavigationLink from "./objects/Navigation/Link";
import carouselCard from "./objects/ContentBlocks/Carousel/CarouselCard/CarouselCard";
import heroImage from "./objects/ContentBlocks/Hero/HeroImage";

// Content block objects
import contentBlocks from "./objects/ContentBlocks";
import twoImageHero from "./objects/ContentBlocks/TwoImageHero/TwoImageHero";
import hero from "./objects/ContentBlocks/Hero/Hero";
import video from "./objects/ContentBlocks/Video/Video";
import spacer from "./objects/ContentBlocks/Spacer/Spacer";
import textWithCta from "./objects/ContentBlocks/TextWithCta/TextWithCta";
import carousel from "./objects/ContentBlocks/Carousel/Carousel";
import textWithImage from "./objects/ContentBlocks/TextWithImage/TextWithImage";

import Global from "./documents/Global";
import Banner from "./documents/Banner";
import Page from "./documents/Page";
import Navigation from "./documents/Navigation";
import StaffMembers from "./documents/StaffMember";
import BlogPosts from "./documents/Post";

const objectSchema = [
  seo,
  link,
  blockContent,
  contentBlocks,
  imageBlock,
  twoImageHeroBlock,
  NavigationSection,
  NavigationLink,
  carouselCard,
  heroImage,
];

const contentBlockSchema = [
  hero,
  video,
  spacer,
  twoImageHero,
  textWithCta,
  carousel,
  textWithImage,
];

const documentSchema = [
  Banner,
  Page,
  Navigation,
  Global,
  StaffMembers,
  BlogPosts,
];

export const schemas = [
  ...objectSchema,
  ...contentBlockSchema,
  ...documentSchema,
];
