import moment from "moment";

export default function TodoCard({ className }: { className?: string }) {
    return (
        <article className={`border rounded-md p-4 hover:shadow-md ${className ? className : ""}`}>
            <div className="flex justify-between items-center">
                <span className="cursor-pointer select-none bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">Medium</span>
                <span className="bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                    </svg>
                </span>
            </div>
            <h3 className="text-slate-800 font-semibold my-1">Buy groceries</h3>
            <p className="text-slate-700 mb-2">Milk, eggs, bread, and fruits Milk, eggs, bread, and fruits</p>
            <p className="text-sm font-medium text-slate-500">{moment("2024-01-20").format('MMMM Do YYYY')}</p>
        </article>
    )
}

