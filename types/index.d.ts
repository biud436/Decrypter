declare module "decompress-zip" {
  export default class DecompressZip {
    constructor(file: string);
    on(eventName: string, callback: (...args) => void);
    extract(objectMapper: {
      path: string;
      filter: (file: { [key: string]: any }) => Boolean;
    });
  }
}

declare module "encoding" {
  export function convert(buffer: Buffer, lang: string): Buffer;
  export function convert(buffer: Uint8Array, lang: string): Buffer;
}
