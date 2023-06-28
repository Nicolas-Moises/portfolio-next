import { Navigation } from "./navigation";

export function Header() {
    return (
        <header className="w-full fixed top-0 right-0 left-0 z-10">
            <div className="w-full max-w-7xl mx-auto flex items-center p-6">
                <Navigation />
            </div>
        </header>
    )
}