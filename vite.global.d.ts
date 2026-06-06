declare module "redux-persist/lib/storage" {
  import { WebStorage } from "redux-persist";
  const storage: WebStorage;
  export default storage;
}

declare module "*.svg?react" {
  import type { SVGProps } from "react";
  const SVG: SVGProps<SVGSVGElement>;
  export default SVG;
}
