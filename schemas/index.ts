// Object types
import seo from "./objects/Seo";
import link from "./objects/Link";
import blockContent from "./objects/BlockContent";
import imageBlock from "./objects/ImageBlock";
import fileBlock from "./objects/FileBlock";
import cardListCard from "./objects/ContentBlocks/CardList/Card";
import NavigationSection from "./objects/Navigation/Section";
import NavigationLink from "./objects/Navigation/Link";
import carouselCard from "./objects/ContentBlocks/Carousel/CarouselCard/CarouselCard";
import heroImage from "./objects/ContentBlocks/Hero/HeroImage";
import heroCard from "./objects/ContentBlocks/Hero/HeroCard";
import gallery from "./objects/ContentBlocks/Gallery/Gallery";
import youtube from "./objects/ContentBlocks/YoutubeVideo/YouTube";
import fee from "./objects/ContentBlocks/Fees/Fee";
import fees from "./objects/ContentBlocks/Fees/Fees";

// Content block objects
import contentBlocks from "./objects/ContentBlocks";
import cardList from "./objects/ContentBlocks/CardList/cardList";
import hero from "./objects/ContentBlocks/Hero/Hero";
import simpleHero from "./objects/ContentBlocks/SimpleHero/SimpleHero";
import reviewsCarousel from "./objects/ContentBlocks/ReviewsCarousel/ReviewsCarousel";
import carousel from "./objects/ContentBlocks/Carousel/Carousel";
import textWithImage from "./objects/ContentBlocks/TextWithImage/TextWithImage";
import staffCards from "./objects/ContentBlocks/StaffCards/StaffCards";
import locationDetails from "./objects/ContentBlocks/LocationDetails/LocationDetails";
import downloads from "./objects/ContentBlocks/Downloads/Downloads";
import gridGallery from "./objects/ContentBlocks/GridGallery/GridGallery";
import gallerySection from "./objects/ContentBlocks/GridGallery/GallerySection";
import gridStaff from "./objects/ContentBlocks/GridStaff/GridStaff";
import staffSection from "./objects/ContentBlocks/GridStaff/GridStaffSection";
import Global from "./documents/Global";
import Banner from "./documents/Banner";
import Page from "./documents/Page";
import Navigation from "./documents/Navigation";
import StaffMembers from "./documents/StaffMember";
import BlogPosts from "./documents/Post";
import Category from "./documents/Category";
import Nursery from "./documents/Nursery";
import Feedback from "./documents/Feedback";

const objectSchema = [
  seo,
  link,
  blockContent,
  contentBlocks,
  imageBlock,
  fileBlock,
  cardListCard,
  NavigationSection,
  NavigationLink,
  carouselCard,
  heroImage,
  heroCard,
  gallery,
  youtube,
  fee,
  fees,
];

const contentBlockSchema = [
  hero,
  simpleHero,
  cardList,
  carousel,
  textWithImage,
  reviewsCarousel,
  staffCards,
  locationDetails,
  downloads,
  gridGallery,
  gallerySection,
  gridStaff,
  staffSection,
];

const documentSchema = [
  Banner,
  Page,
  Navigation,
  Global,
  StaffMembers,
  BlogPosts,
  Category,
  Nursery,
  Feedback,
];

export const schemas = [
  ...objectSchema,
  ...contentBlockSchema,
  ...documentSchema,
];
