import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TodoList from "@/components/TodoList/TodoList";
import TodoBoard from "../TodoBoard/TodoBoard";
import { Input } from "@/components/ui/input";

export default function TodoTabs() {
  return (
    <Tabs defaultValue="board" className="w-full">
      <div className="flex justify-between">
        <TabsList>
          <TabsTrigger value="board">Board</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
        </TabsList>
        <Input type="search" placeholder="🔍 Search Todo..." className="w-1/4 rounded-full ps-5" />
      </div>
      <TabsContent className="w-full" value="board">
        <TodoBoard />
      </TabsContent>
      <TabsContent className="w-full" value="list">
        <TodoList />
      </TabsContent>
    </Tabs>
  );
}
