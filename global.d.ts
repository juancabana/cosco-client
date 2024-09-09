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

type Fn = () => void;

declare module 'plurales' {
  const plurales: (word: string) => string;
  export default plurales;
}