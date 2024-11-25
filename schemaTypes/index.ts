// Object types
import seo from "./objects/Seo";
import link from "./objects/Link";
import blockContent from "./objects/BlockContent";
import imageBlock from "./objects/ImageBlock";
import twoImageHeroBlock from "./objects/ContentBlocks/TwoImageHero/TwoImageHeroBlock";
import proxyString from "./objects/proxyString";
import shopifyCollection from "./objects/shopifyCollection";
import shopifyCollectionRule from "./objects/shopifyCollectionRule";

// Content block objects
import contentBlocks from "./objects/ContentBlocks";
import twoImageHero from "./objects/ContentBlocks/TwoImageHero/TwoImageHero";
import hero from "./objects/ContentBlocks/Hero/Hero";
import video from "./objects/ContentBlocks/Video/Video";
import spacer from "./objects/ContentBlocks/Spacer/Spacer";
import textWithCta from "./objects/ContentBlocks/TextWithCta/TextWithCta";
import { localeString, localeBlockContent, localeText } from "./objects/I18n";

// Page types
import Banner from "./documents/Banner";
import Page from "./documents/Page";
import Collection from "./documents/Collection";

const objectSchema = [
  seo,
  link,
  blockContent,
  contentBlocks,
  imageBlock,
  twoImageHeroBlock,
  shopifyCollection,
  shopifyCollectionRule,
  proxyString,
  localeString,
  localeBlockContent,
  localeText,
];
const contentBlockSchema = [hero, video, spacer, twoImageHero, textWithCta];

const documentSchema = [Banner, Page, Collection];

export const schemaTypes = [
  ...objectSchema,
  ...contentBlockSchema,
  ...documentSchema,
];
