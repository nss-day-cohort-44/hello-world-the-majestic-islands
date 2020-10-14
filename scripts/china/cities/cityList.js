import { useCities } from "./CityDataProvider.js"
import { City } from "./city.js"



export const CityList = () => {

    const contentElement = document.querySelector(".china__container")
    const cities = useCities()
    let cityHTMLRepresentations = ""
    
    
    for (const city of cities) {
        
    cityHTMLRepresentations += City(city)

    }
    contentElement.innerHTML += `
    <div class="china__sites">
    <h3>Famous Cities</h3>
    ${cityHTMLRepresentations}
    </div>`
    
}