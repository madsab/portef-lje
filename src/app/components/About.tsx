import { AboutService } from "../../../backend/AboutService"
import AboutMeItem, { AboutMeItemProps } from "./AboutMeItem"

export const About = () => {
  const data = AboutService.getAboutInfo()
  const daysToXmas = AboutService.daysToXMas()

  return (
    <div>
      <h2>About Me</h2>
      <div>
        {data.map((item: AboutMeItemProps) => (
          <AboutMeItem key={item.title} {...item} />
        ))}
      </div>
      <div className="bg-red-500 m-10">
        <p>There are {daysToXmas} milliseconds until Christmas</p>
      </div>
    </div>
  )
}
