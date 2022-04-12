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
