import Navigation from "@/components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import TodoTabs from "@/components/TodoTabs/TodoTabs";

export default function Layout() {
  return (
    <>
      <Navigation />
      <main className="container">
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[80vh] border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="p-6">
              <SidebarMenu />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="p-6">
              <TodoTabs />
              <Outlet />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
}
