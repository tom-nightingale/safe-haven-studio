// Object types
import seo from "./objects/Seo";
import link from "./objects/Link";
import blockContent from "./objects/BlockContent";
import imageBlock from "./objects/ImageBlock";
import twoImageHeroBlock from "./objects/ContentBlocks/TwoImageHero/TwoImageHeroBlock";
import proxyString from "./objects/proxyString";
import NavigationSection from "./objects/Navigation/Section";
import NavigationLink from "./objects/Navigation/Link";

// Content block objects
import contentBlocks from "./objects/ContentBlocks";
import twoImageHero from "./objects/ContentBlocks/TwoImageHero/TwoImageHero";
import hero from "./objects/ContentBlocks/Hero/Hero";
import video from "./objects/ContentBlocks/Video/Video";
import spacer from "./objects/ContentBlocks/Spacer/Spacer";
import textWithCta from "./objects/ContentBlocks/TextWithCta/TextWithCta";
import { localeString, localeBlockContent, localeText } from "./objects/I18n";

// Document types
import Banner from "./documents/Banner";
import Page from "./documents/Page";
import Navigation from "./documents/Navigation";

// Shopify Documents
import Collection from "./documents/Collection";
import Product from "./documents/Product";
import ProductVariant from "./documents/ProductVariant";

// Shopify Objects
import shopifyCollection from "./objects/Shopify/Collection/shopifyCollection";
import shopifyCollectionRule from "./objects/Shopify/Collection/shopifyCollectionRule";
import shopifyProduct from "./objects/Shopify/Product/shopifyProduct";
import shopifyProductVariant from "./objects/Shopify/ProductVariant/shopifyProductVariant";
import shopifyProductOption from "./objects/Shopify/ProductOption/shopifyProductOption";

const objectSchema = [
  seo,
  link,
  blockContent,
  contentBlocks,
  imageBlock,
  twoImageHeroBlock,
  proxyString,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,
  shopifyProductOption,
  localeString,
  localeBlockContent,
  localeText,
  NavigationSection,
  NavigationLink,
];
const contentBlockSchema = [hero, video, spacer, twoImageHero, textWithCta];

const documentSchema = [Banner, Page, Navigation];

const shopifySchema = [Collection, Product, ProductVariant];

export const schemas = [
  ...objectSchema,
  ...contentBlockSchema,
  ...documentSchema,
  ...shopifySchema,
];
