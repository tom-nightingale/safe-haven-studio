// Object types
import seo from "./objects/Seo";
import link from "./objects/Link";
import blockContent from "./objects/BlockContent";
import imageBlock from "./objects/ImageBlock";
import twoImageHeroBlock from "./objects/ContentBlocks/TwoImageHero/TwoImageHeroBlock";
import proxyString from "./objects/proxyString";
import NavigationSection from "./objects/Navigation/Section";
import NavigationLink from "./objects/Navigation/Link";
import productHotspots from "./objects/productHotspots";
import imageWithProductHotspots from "./objects/imageWithProductHotspots";
import productWithVariant from "./objects/productWithVariant";
import carouselCard from "./objects/ContentBlocks/Carousel/CarouselCard/CarouselCard";
import heroImage from "./objects/ContentBlocks/Hero/HeroImage";
import redirect from "./objects/Redirect";
import plpCampaignSlot from "./objects/Campaign/Slot";

// Content block objects
import contentBlocks from "./objects/ContentBlocks";
import twoImageHero from "./objects/ContentBlocks/TwoImageHero/TwoImageHero";
import hero from "./objects/ContentBlocks/Hero/Hero";
import video from "./objects/ContentBlocks/Video/Video";
import spacer from "./objects/ContentBlocks/Spacer/Spacer";
import textWithCta from "./objects/ContentBlocks/TextWithCta/TextWithCta";
import carousel from "./objects/ContentBlocks/Carousel/Carousel";
import textWithImage from "./objects/ContentBlocks/TextWithImage/TextWithImage";
import { localeString, localeBlockContent, localeText } from "./objects/I18n";

// Document types
import Global from "./documents/Global";
import Banner from "./documents/Banner";
import Page from "./documents/Page";
import Navigation from "./documents/Navigation";
import RedirectGroup from "./documents/RedirectGroup";
import Campaign from "./documents/Campaign";

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
import priceRange from "./objects/Shopify/Product/priceRange";
import options from "./objects/Shopify/Product/options";
import spot from "./objects/Shopify/ProductHotspot/Spot";

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
  priceRange,
  options,
  shopifyProductVariant,
  shopifyProductOption,
  localeString,
  localeBlockContent,
  localeText,
  NavigationSection,
  NavigationLink,
  productHotspots,
  imageWithProductHotspots,
  spot,
  productWithVariant,
  carouselCard,
  heroImage,
  redirect,
  plpCampaignSlot,
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
  RedirectGroup,
  Campaign,
  Global,
];

const shopifySchema = [Collection, Product, ProductVariant];

export const schemas = [
  ...objectSchema,
  ...contentBlockSchema,
  ...documentSchema,
  ...shopifySchema,
];
