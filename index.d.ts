declare module "*.svg" {
  const content: any;
  export default content;
}

declare interface QuillOptions {
  modules?: { toolbar: any };
  theme?: string;
}

type DangerouslyPasteHTML2 = (html: string, source: "api") => void;

type DangerouslyPasteHTML3 = (index: number, html: string, source: "api") => void;

declare class QuillClipboard {
  declare dangerouslyPasteHTML: DangerouslyPasteHTML2 & DangerouslyPasteHTML3;
}

declare class Quill {
  constructor(container: HTMLElement, options?: QuillOptions);

  declare root: HTMLElement;

  declare on: (event: string, eventHandler: (value?: any) => void) => void;

  declare clipboard: QuillClipboard;
}
