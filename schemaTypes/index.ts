import seo from "./Objects/Seo";
import link from "./Objects/Link";
import blockContent from "./Objects/BlockContent";
import contentBlocks from "./Objects/ContentBlocks";
import imageBlock from "./Objects/ImageBlock";
import twoImageHeroBlock from "./Objects/ContentBlocks/TwoImageHero/TwoImageHeroBlock";
import twoImageHero from "./Objects/ContentBlocks/TwoImageHero/TwoImageHero";
import hero from "./Objects/ContentBlocks/Hero/Hero";
import video from "./Objects/ContentBlocks/Video/Video";
import spacer from "./Objects/ContentBlocks/Spacer/Spacer";
import { localeString, localeBlockContent, localeText } from "./Objects/I18n";

import Banner from "./Documents/Banner";
import Page from "./Documents/Page";

const objectSchema = [
  seo,
  link,
  blockContent,
  contentBlocks,
  imageBlock,
  twoImageHeroBlock,
  localeString,
  localeBlockContent,
  localeText,
];
const contentBlockSchema = [hero, video, spacer, twoImageHero];

const documentSchema = [Banner, Page];

export const schemaTypes = [
  ...objectSchema,
  ...contentBlockSchema,
  ...documentSchema,
];
