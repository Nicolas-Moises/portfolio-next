import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center p-4">
        <Navigation />
      </div>
    </header>
  )
}
