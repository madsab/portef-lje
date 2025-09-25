"use client"

import Image from "next/image"
import HeroImage from "../assets/HeroImg.png"
import Button from "./Button"

export const Hero = () => {
  return (
    <div className="flex items-center">
      <div className="grow space-y-5">
        <p className=" text-6xl font-bold bg-gradient-to-r from-white to-slate-700 bg-clip-text text-transparent">
          Hi, im John Doe
        </p>
        <p>I fullstack developer big time</p>
        <Button onClick={() => console.log("asdsad")}>Contact Me</Button>
      </div>
      <div className="grow ">
        <Image src={HeroImage} className="rounded-full" alt="Image of my self" width={500} height={500} />
      </div>
    </div>
  )
}
