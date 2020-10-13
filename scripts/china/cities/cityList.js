import { useCities } from "./CityDataProvider.js"
import { city } from "./city.js"



export const CityList = () => {

    const contentElement = document.querySelector(".china__cities")
    const cities = useCities()
    let cityHTMLRepresentations = ""
    
    
    for (const city of cities) {
        
    cityHTMLRepresentations += city(city)

    }
    contentElement.innerHTML += `
    <div class="china__cities">
    ${cityHTMLRepresentations}
    </div>`
    
}