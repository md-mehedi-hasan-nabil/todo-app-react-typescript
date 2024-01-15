
import { Button } from "../ui/button"


export default function Navigation() {
    return (
        <nav className="py-5 shadow-md">
            <div className="container flex justify-between items-center">
                <h2 className="font-semibold text-2xl">TODO</h2>
                <Button>Add</Button>
            </div>
        </nav>

    )
}
