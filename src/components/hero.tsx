import Link from "next/link";
import { Particles } from "./ui/particles";
import ReactWrapBalancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section>
            <div className="relative max-w-6xl px-4 mx-auto sm:px-6 xl:mt-20">
                <Particles className="absolute inset-0 -z-10 " />

                <div className="pt-32 pb-16 md:pt-52 md:pb-32">
                    <div className="container mx-auto text-center">
                        <div className="mb-6">
                            <div className="relative inline-flex before:absolute before:inset-0 ">
                                <div
                                className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-zinc-400/30 bg-zinc-500/10 rounded-full
                                text-transparent bg-clip-text bg-gradient-to-tr from-zinc-200/60 via-zinc-200 to-zinc-200/60 w-full group hover:cursor-default"
                                >
                                        Prazer, sou o Nicolas Moises
                                </div>
                            </div>
                        </div>
                        <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
                            <ReactWrapBalancer>
                                Criando{' '}
                                <span className="">
                                    interfaces 
                                </span> 
                                {' '} incríveis
                            </ReactWrapBalancer>
                        </h1>
                        <p className="mb-8 text-lg text-zinc-400">
                            Bem vindo ao meu portfólio, aqui o design é centrado no usuário em primeiro lugar.
                        </p>

                        <div
                            className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
                        >
                        <Link
                            className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded-md px-5 py-3  text-white bg-gradient-to-r 
                            from-violet-500/80 via-violet-500 to-purple-300/80 hover:bg-violet-400 group leading-none"
                            href="/overview"
                        > 
                            Baixar currículo{" "}
                            <ArrowRight className="w-3 h-3 tracking-normal text-white group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                        </Link>

                        <Link
                            className="w-full transition duration-150 ease-in-out text-zinc-200 hover:text-violet-400"
                            href="https://github.com/chronark/highstorm"
                            target="_blank"
                        >
                            Fale comigo
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}