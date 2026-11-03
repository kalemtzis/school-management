import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

export const ToolsAiMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Tools - AI</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu></SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
