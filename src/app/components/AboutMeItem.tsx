import { Icon } from "@iconify/react"
import { FC } from "react"

export interface AboutMeItemProps {
  icon: string
  title: string
  description: string
  number?: number
}

const AboutMeItem: FC<AboutMeItemProps> = (props) => {
  return (
    <div key={props.title} className="flex props.-center gap-4">
      <Icon icon={props.icon} />
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default AboutMeItem
