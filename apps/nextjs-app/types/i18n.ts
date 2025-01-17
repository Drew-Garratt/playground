import type { JSXElementConstructor, ReactElement, ReactNode } from "react";

export interface LocaleConfig {
  code: string;
  localName: string;
  name: string;
  langDir: string;
  dateFormat: string;
  hrefLang: string;
  enabled: boolean;
  default?: boolean;
}

export type FormattedMessage =
  | string
  | ReactElement<HTMLElement, string | JSXElementConstructor<HTMLElement>>
  | readonly ReactNode[];
