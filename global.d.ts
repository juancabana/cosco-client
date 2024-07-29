/**
 * This file can be used to define Global Typescript types
 */

declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.gif' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.webp' {
  const src: string;
  export default src;
}

/////////////////////////////////////////////////////////////////

type Reject<T> = (err: T) => void;
type Fn = () => void;

/////////////////////////////////////////////////////////////////

interface MundialResponse<T = unknown, C = number> {
  code: C;
  data: T;
  message: string;
}

/////////////////////////////////////////////////////////////////

interface ContentfulImage {
  description: string;
  file: import('contentful').AssetFile;
  gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData | null;
}

type ContentfulAsset = import('contentful').AssetFields;

interface ContentfulRichText {
  raw: string;
}

interface ContentfulModal {
  imgMain: ContentfulImage;
  longTextContent: ContentfulMarkdown;
  textButtonA: string;
  textButtonB?: string;
  textTitle: string;
}

interface ContentfulLink {
  image?: ContentfulImage;
  title: string;
  url: string;
}

interface ContentfulCard {
  imgMain?: ContentfulImage;
  linkButton?: ContentfulLink;
  longTextDescription?: ContentfulMarkdown;
  slug?: string;
  textSubtitle?: string;
  textTitle: string;
}

interface ContentfulMarkdown {
  childMarkdownRemark: {
    html: string;
  };
}

interface ContentfulField {
  textError: string;
  textLabel: string;
  textPlaceholder: string;
}

interface ContentfulSteps {
  listTextSteps: string[];
}

interface ContentfulVehicleType {
  cardVehicleList: ContentfulCard[];
  textTitle: string;
}

interface ContentfulJson {
  internal: {
    content: string;
  };
}

interface ContentfulBanner {
  imgButtonLeft: ContentfulImage;
  imgButtonRight: ContentfulImage;
  imgGuarded: ContentfulImage;
  imgMain: ContentfulImage;
  slides: ContentfulCard[];
}
