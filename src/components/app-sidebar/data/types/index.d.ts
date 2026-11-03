import { LucideIcon } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";

export type AppsDataType = {
  title: String;
  href: Url;
  icon?: LucideIcon;
};
