import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { academicData } from "../data";
import Link from "next/link";

export const AcademicMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Academic</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {academicData.map(({ title, href, icon: Icon }, idx) => (
            <SidebarMenuItem key={idx}>
              <SidebarMenuButton
                className="cursor-pointer"
                render={
                  <Link prefetch href={href}>
                    {Icon && <Icon size="icon" />}
                    <span>{title}</span>
                  </Link>
                }
              />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
