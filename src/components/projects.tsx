import Image from 'next/image'
import GlowTop from '../../public/images/glow-top.svg'
import { Wand2, Zap, MonitorSmartphone, FastForward } from 'lucide-react'

import screenshot from '../assets/screen.png'

const features = [
  {
    icon: Zap,
    name: 'Performance e otimização',
    description:
      'Estratégias para o máximo em performance na construção do seu Website ou App.',
  },
  {
    icon: Wand2,
    name: 'Designs que encantam e cativam.',
    description:
      'Interfaces com animações e microinterações para brilhar os olhos de seus clientes',
  },
  {
    icon: FastForward,
    name: 'Produtividade',
    description:
      'Foco em metodogia, implementação de patterns e mais para máxima produtividade ',
  },
  {
    icon: MonitorSmartphone,
    name: 'Mobile first',
    description:
      'Além de aplicações Mobile, sua landing page construída também para pequenos dispositivos',
  },
]

export function Projects() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:mt-20">
        <div
          className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden rounded-t-[3rem]"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2">
            <Image
              src={GlowTop}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pb-12 pt-16 md:pb-20 md:pt-52">
          <div>
            {/* Section content */}
            <div className="mx-auto flex max-w-xl flex-col space-y-8 space-y-reverse md:max-w-none md:flex-row md:space-x-8 md:space-y-0 lg:space-x-16 xl:space-x-20 ">
              {/* Content */}
              <div className="order-1 max-md:text-center md:order-none md:w-7/12 lg:w-1/2">
                {/* Content #1 */}
                <div>
                  <div className="inline-flex bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 bg-clip-text pb-3 font-medium text-transparent ">
                    Design engineering
                  </div>
                </div>
                <h3 className="bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 bg-clip-text pb-3 text-4xl font-bold text-transparent">
                  Cada Píxel Importa
                </h3>
                <p className="mb-8 text-lg text-zinc-400">
                  Projetos idealizados desde o UI, buscando o máximo em novidade
                  seguindo as stacks atuais e implementando o que está em alta
                  na comunidade tech. Alguns diferenciais abaixo:
                </p>
                <dl className="grid max-w-xl grid-cols-1 gap-4 lg:max-w-none">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="group rounded px-4 py-3 duration-500 hover:bg-zinc-100"
                    >
                      <div className="mb-1 flex items-center space-x-2 ">
                        <feature.icon className="h-4 w-4 shrink-0 text-zinc-300 duration-500 group-hover:text-zinc-950" />
                        <h4 className="font-medium text-zinc-50 duration-500 group-hover:text-zinc-950">
                          {feature.name}
                        </h4>
                      </div>
                      <p className="text-left text-sm text-zinc-400 duration-500 group-hover:text-zinc-950">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 md:w-5/12 lg:ml-10 lg:mr-0 lg:mt-0 lg:w-1/2 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="z-10 max-w-3xl flex-none sm:max-w-5xl lg:max-w-none ">
                  <Image
                    src={screenshot}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="z-10 w-[76rem] rounded-xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
