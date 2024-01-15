import Navigation from "@/components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className="container">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[80vh] border"
        >
          <ResizablePanel defaultSize={20}>
            <div className="p-6">
              <SidebarMenu />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <div className="p-6">
              <Outlet />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
