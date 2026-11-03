import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

export const ManagementMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Management</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu></SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
