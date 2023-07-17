import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="mx-auto hidden lg:block ">
      <ul className="flex items-center rounded-full border border-white/10 bg-zinc-800/60 px-3 py-2 text-zinc-200 shadow-lg shadow-zinc-800/5 backdrop-blur">
        <li>
          <Link
            href="#"
            className="ease cursor-pointer px-3  text-sm font-medium transition hover:text-violet-400"
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="ease cursor-pointer px-3  text-sm font-medium transition hover:text-violet-400"
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="ease cursor-pointer px-3  text-sm font-medium transition hover:text-violet-400"
          >
            Skills
          </Link>
        </li>
      </ul>
    </nav>
  )
}
