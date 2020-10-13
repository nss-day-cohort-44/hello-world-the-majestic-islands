import { City } from './City.js'
import { useCity } from './CityDataProvider.js'

export const CityList = () => {
    const contentElement = document.querySelector(".vanuatu__list")

    const cities = useCity()
    
    let cityHTMLRepresentations = ""
    for (const place of cities) {
        cityHTMLRepresentations += City(place)
    }

    contentElement.innerHTML += `
    <section class="cityList">
    <h3>Where to go in Vanuatu</h3>
    <div class="cityContainer">
    ${cityHTMLRepresentations}
    </div>
    </section>
    `
}