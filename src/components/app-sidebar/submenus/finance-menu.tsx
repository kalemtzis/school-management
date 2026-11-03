import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";

export const FinanceMenu = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Finance</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu></SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
