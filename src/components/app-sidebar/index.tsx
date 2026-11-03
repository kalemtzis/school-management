"use client";

import { UserButton } from "@clerk/nextjs";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
} from "../ui/sidebar";
import { MainMenu } from "./submenus/main-menu";
import { PeoplesMenu } from "./submenus/peoples-menu";
import { LucideOctagon } from "lucide-react";
import { AcademicMenu } from "./submenus/academic-menu";
import { ManagementMenu } from "./submenus/management-menu";
import { ToolsAiMenu } from "./submenus/tools-ai-menu";
import { SettingsMenu } from "./submenus/settings-menu";
import { FinanceMenu } from "./submenus/finance-menu";

/* 
TODO: [ ] Complete the whole Sidebar.
*/

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader className="flex flex-row gap-x-2 justify-center items-center">
        <LucideOctagon />
        <span>Schooly</span>
      </SidebarHeader>
      <SidebarContent>
        <MainMenu />
        <PeoplesMenu />
        <AcademicMenu />
        <ManagementMenu />
        <ToolsAiMenu />
        <FinanceMenu />
        <SettingsMenu />
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
    </Sidebar>
  );
};
