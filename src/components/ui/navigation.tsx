import { Link } from 'react-scroll/modules'

export function Navigation() {
    return (
        <nav className="hidden lg:block mx-auto ">
          <ul className="flex gap-10 items-center border-[0.2px] border-zinc-400/40 px-8 py-3 rounded-full bg-zinc-800/60 backdrop-blur-xl">
            <li>
              <a
                href='home'
                className="font-medium text-sm text-gray-300 hover:text-violet-400 transition ease cursor-pointer"
              >
                Início
              </a>
            </li>
            
            <li>
              <a
                href='#'
                className="font-medium text-sm text-gray-300 hover:text-violet-400 transition ease cursor-pointer"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href='#'
                className="font-medium text-sm text-gray-300 hover:text-violet-400 transition ease cursor-pointer"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href='#'
                className="font-medium text-sm text-gray-300 hover:text-violet-400 transition ease cursor-pointer"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
    )
}