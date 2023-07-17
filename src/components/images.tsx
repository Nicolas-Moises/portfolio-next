import Image from 'next/image'

export function Images() {
  return (
    <section className=" sm:mt-20">
      <div className="-my-4 flex items-center justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div className="aspect-[9/10] w-72 rotate-2 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=384&q=75"
            alt=""
            width={300}
            height={330}
          />
        </div>
        <div className="aspect-[9/10] w-72 -rotate-2 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=384&q=75"
            alt=""
            width={300}
            height={330}
          />
        </div>
        <div className="aspect-[9/10] w-72 rotate-2 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=384&q=75"
            alt=""
            width={300}
            height={330}
          />
        </div>
        <div className="aspect-[9/10] w-72 -rotate-2 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
            alt=""
            width={300}
            height={330}
          />
        </div>
        <div className="aspect-[9/10] w-72 rotate-2 overflow-hidden rounded-xl">
          <Image
            className="h-full w-full object-cover"
            src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=384&q=75"
            alt=""
            width={300}
            height={330}
          />
        </div>
      </div>
    </section>
  )
}
