/// <reference types="vite/client" />
declare module '*.jpg' {
  const jpgPath: string;
  export default jpgPath;
}
declare module '*.png' {
  const pngPath: string;
  export default pngPath;
}
