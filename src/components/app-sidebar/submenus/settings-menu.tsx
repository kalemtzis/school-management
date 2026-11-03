import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

export const SettingsMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Settings</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu></SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
