import { AppSidebar } from "@/components/app-sidebar";
import { AppNavbar } from "@/components/navbar";
import { GridPattern } from "@/components/ui/grid-patterns";

const Page = () => {
  return (
    <div className="min-h-screen w-full flex">
      <AppSidebar />
      <GridPattern className="min-h-105 w-full p-1" fade="radial">
        <AppNavbar />
      </GridPattern>
    </div>
  );
};

export default Page;
