import TodoCard from "@/components/TodoCard/TodoCard";

export default function TodoBoard() {
  return (
    <div className="grid grid-cols-12 gap-4 mt-5">
      <TodoCard className="col-span-12 md:col-span-4" />
      <TodoCard className="col-span-12 md:col-span-4" />
      <TodoCard className="col-span-12 md:col-span-4" />
      <TodoCard className="col-span-12 md:col-span-4" />
      <TodoCard className="col-span-12 md:col-span-4" />
      <TodoCard className="col-span-12 md:col-span-4" />
    </div>
  )
}
