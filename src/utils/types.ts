import { StaticImageData } from "next/image";
import { ElementType, ReactNode } from "react";

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

export interface SKILL_PROGRESS {
  skill: string;
  value: number;
}

export interface HEADING_PROPS {
  label: string;
}

export interface EXPERIENCE_PROPS {
  duration: string;
  heading: string;
  name: string;
  description: string;
}

export interface RESUME_HEADING_PROPS {
  Icon: ElementType;
  label: string;
}

export interface PORTFOLIO_PROPS {
  img: StaticImageData;
  projectName: string;
  description: string;
  url: string;
}
