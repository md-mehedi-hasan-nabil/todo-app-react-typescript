
export default function SidebarMenu() {
  return (
    <aside>
      <div className="space-y-1">
        <p className="w-full font-medium cursor-pointer rounded-md ps-3 py-1.5 hover:bg-slate-100">All</p>
        <p className="w-full font-medium cursor-pointer rounded-md ps-3 py-1.5 hover:bg-slate-100">Completed</p>
        <p className="w-full font-medium cursor-pointer rounded-md ps-3 py-1.5 hover:bg-slate-100">Incompleted</p>
      </div>
    </aside>
  );
}
