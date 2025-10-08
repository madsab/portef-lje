import { AboutItem } from "../types/About"



interface IAboutService {
    myFavoriteNumber: number
    getAboutInfo: () => AboutItem[]
    daysToXMas: () => number
    milliSecondsToDays: (milliseconds: number) => number
}


export const AboutService: IAboutService = {
        myFavoriteNumber: 23,
        getAboutInfo: () => {
        return [
                    {
                        "title": "Frontend",
                        "description": "asdaskldjsakldjlsajdj",
                        "icon": "gis:arrow"
                    },
                    {
                        "title": "Backend",
                        "description": "Responsible for server-side logic and integration.",
                        "icon": "gis:server"
                    },
                    {
                        "title": "DevOps",
                        "description": "Ensures smooth deployment and infrastructure management.",
                        "icon": "gis:cloud"
                    },
                    {
                        "title": "UI/UX Design",
                        "number": 4,
                        "description": "Focuses on user experience and interface design.",
                        "icon": "test"
                    }
            ]
    },

    daysToXMas: () => {
        const today = new Date()
        const christmas = new Date("2025-12-24")

        const millisecondsToXmas = christmas.getTime() - today.getTime()

        return millisecondsToDays(millisecondsToXmas)
    },

    milliSecondsToDays: (milliseconds: number) => {
        return milliseconds / (1000 * 60 * 60 * 24)
    }
}







const millisecondsToDays = (milliseconds: number) => {
    return milliseconds / (1000 * 60 * 60 * 24)
}