declare module 'redux-persist/es/storage' {
  import { WebStorage } from 'redux-persist';
  const storage: WebStorage;
  export default storage;
}

declare module '*.svg?react' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
