import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface HEADER_PROPS {
  label: string;
  url: string;
}

export interface PERSONAL_PROPS {
  label: string;
  value: string;
}
