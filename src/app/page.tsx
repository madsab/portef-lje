import { About } from "./components/About"
import ApiSection from "./components/ApiSection"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <About />
      <ApiSection />
    </div>
  )
}
