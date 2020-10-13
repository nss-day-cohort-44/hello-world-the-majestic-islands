import { useCities } from "./CityDataProvider.js"
import { City } from "./city.js"



export const CityList = () => {

    const contentElement = document.querySelector(".china__cities")
    const cities = useCities()
    let cityHTMLRepresentations = ""
    
    
    for (const city of cities) {
        
    cityHTMLRepresentations += City(city)

    }
    contentElement.innerHTML += `
    <div class="china__cities">
    <h3>Famous Cities</h3>
    ${cityHTMLRepresentations}
    </div>`
    
}