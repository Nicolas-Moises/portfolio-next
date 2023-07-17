import Link from 'next/link'
import { Particles } from './ui/particles'
import ReactWrapBalancer from 'react-wrap-balancer'
import { Avatar, AvatarImage } from './ui/avatar'

import Github from '../assets/icons/github'
import { Instagram } from '../assets/icons/instagram'
import { Linkedin } from '../assets/icons/linkedin'
import { Twitter } from '../assets/icons/twitter'

const social = [
  {
    id: 1,
    label: 'github',
    link: '#',
    icon: Github,
  },
  {
    id: 2,
    label: 'linkedin',
    link: '#',
    icon: Linkedin,
  },
  {
    id: 3,
    label: 'twitter',
    link: '#',
    icon: Twitter,
  },
  {
    id: 4,
    label: 'instagram',
    link: '#',
    icon: Instagram,
  },
]

export function Hero() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-12 sm:px-6">
        <Particles className="absolute inset-0 -z-10" />
        <div className="pb-10 pt-32">
          <div className="max-w-2xl">
            <Avatar className="mb-9 h-16 w-16">
              <AvatarImage src="https://github.com/Nicolas-Moises.png" />
            </Avatar>
            <h1
              className="bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 bg-clip-text text-5xl font-extrabold tracking-tighter 
                text-transparent lg:text-5xl"
            >
              <ReactWrapBalancer>
                Um design engineering criando{' '}
                <span className="">interfaces</span> incríveis.
              </ReactWrapBalancer>
            </h1>
            <p className="my-8 text-base leading-relaxed text-zinc-400">
              Me chamo Nicolas, sou um design engineering em início de carreira
              atualmente vivendo em São Paulo - Brasil. Atuo principalmente no
              front end com as stacks mais atuais seguindo tendencias do
              mercado, porém construo e/ou atuo também em aplicações full.
            </p>

            <div className="flex items-center gap-6">
              {social.map((link) => {
                return (
                  <Link key={link.id} href={link.link}>
                    <link.icon className="h-5 w-5 fill-zinc-400 transition-colors duration-100 hover:fill-zinc-200" />
                  </Link>
                )
              })}
              {/* <Link
                className="group flex w-full items-center justify-center whitespace-nowrap rounded-md border border-violet-300 bg-gradient-to-r from-violet-500/80 via-violet-500  to-purple-300/80 px-5 
                            py-3 font-medium leading-none text-white transition duration-150 ease-in-out hover:bg-violet-400"
                href="/#"
              >
                Baixar currículo{' '}
                <ArrowRight className="ml-1 h-3 w-3 tracking-normal text-white transition-transform duration-150 ease-in-out group-hover:translate-x-0.5" />
              </Link>

              <Link
                className="w-full text-zinc-200 transition duration-150 ease-in-out hover:text-violet-400"
                href="https://github.com/chronark/highstorm"
                target="_blank"
              >
                Fale comigo
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
