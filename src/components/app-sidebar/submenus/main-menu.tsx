import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { AppWindowIcon, ChevronRight, LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import { appsData } from "../data";

const AppsDropdownMenu = () => {
  return (
    <Collapsible className="group/collapsible" title="Applications">
      <SidebarMenuItem>
        <SidebarMenuButton
          className="cursor-pointer"
          render={
            <CollapsibleTrigger>
              <AppWindowIcon size="icon" />
              <span>Applications</span>
              <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90" />
            </CollapsibleTrigger>
          }
        />
      </SidebarMenuItem>

      <CollapsibleContent>
        <SidebarMenuSub>
          {appsData.map((item, idx) => (
            <SidebarMenuSubItem key={idx}>
              <SidebarMenuButton
                render={
                  <Link prefetch href={item.href}>
                    {item.title}
                  </Link>
                }
              />
            </SidebarMenuSubItem>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
};

export const MainMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="cursor-pointer"
              render={
                <Link prefetch href="#">
                  <LayoutDashboardIcon size="icon" />
                  <span>Dashboard</span>
                </Link>
              }
            />
          </SidebarMenuItem>

          <SidebarMenuItem>
            <AppsDropdownMenu />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
