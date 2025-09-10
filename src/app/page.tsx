import { About } from "./components/About"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"

export default function Home() {
  return (
    <div className="bg-blue-700">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
