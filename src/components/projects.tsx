import Image from "next/image";
import GlowTop from "../../public/images/glow-top.svg";
import { Wand2, Zap, MonitorSmartphone, FastForward } from "lucide-react";

import screenshot from '../assets/screen.png'

const features = [
  {
    icon: Zap,
    name: "Performance e otimização",
    description: "Estratégias para o máximo em performance na construção do seu Website ou App.",
  },
  {
    icon: Wand2,
    name: "Designs que encantam e cativam.",
    description: "Interfaces com animações e microinterações para brilhar os olhos de seus clientes",
  },
  {
    icon: FastForward,
    name: "Produtividade",
    description: "Foco em metodogia, implementação de patterns e mais para máxima produtividade ",
  },
  {
    icon: MonitorSmartphone,
    name: "Mobile first",
    description: "Além de aplicações Mobile, sua landing page construída também para pequenos dispositivos",
  },
];

export function Projects() {
  
  return (
    <section>
      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:mt-20">
        <div
          className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
            <Image
              src={GlowTop}
              className="max-w-none"
              width={1404}
              height={658}
              alt="Features Illustration"
            />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">
          <div>
            {/* Section content */}
            <div className="flex flex-col max-w-xl mx-auto md:max-w-none md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0 ">
              {/* Content */}
              <div
                className="order-1 md:w-7/12 lg:w-1/2 md:order-none max-md:text-center"
              >
                {/* Content #1 */}
                <div>
                  <div className="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 ">
                    Design engineering
                  </div>
                </div>
                <h3 className="pb-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                  Cada Píxel Importa
                </h3>
                <p className="mb-8 text-lg text-zinc-400">
                  Projetos idealizados desde o UI, buscando o máximo em novidade seguindo as stacks atuais e implementando o que está em alta na comunidade tech. 
                  Alguns diferenciais abaixo: 
                </p>
                <dl className="max-w-xl grid grid-cols-1 gap-4 lg:max-w-none">
                  {features.map((feature) => (
                    <div
                      key={feature.name}
                      className="px-4 py-3 rounded group hover:bg-zinc-100 duration-500"
                    >
                      <div className="flex items-center mb-1 space-x-2 ">
                        <feature.icon className="w-4 h-4 shrink-0 text-zinc-300 group-hover:text-zinc-950 duration-500" />
                        <h4 className="font-medium text-zinc-50 group-hover:text-zinc-950 duration-500">
                          {feature.name}
                        </h4>
                      </div>
                      <p className="text-sm text-left text-zinc-400 group-hover:text-zinc-950 duration-500">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="flex max-w-2xl mx-auto mt-16 md:w-5/12 lg:w-1/2 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                <div className="z-10 flex-none max-w-3xl sm:max-w-5xl lg:max-w-none ">
                  <Image
                    src={screenshot}
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="w-[76rem] z-10 rounded-xl border border-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};