import { Hero } from '@/components/hero'
import { Images } from '@/components/images'

export default function Home() {
  return (
    <div className="h-full min-h-screen w-full">
      <Hero />
      <Images />
    </div>
  )
}
