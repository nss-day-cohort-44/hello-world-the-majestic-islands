import { Cities } from "./Cities.js"
import { useCity } from "./CitiesDataProvider.js"



export const CitiesList = () => {

    const contentElement = document.querySelector(".sweden__sites")

    const places = useCity()

    let cityHTMLRepresentations = ""

    for ( const place of places ) {
        cityHTMLRepresentations += Cities(place)
    }

    contentElement.innerHTML += `
    <h3>Cities of Sweden</h3>
    <div class="cities">
    ${cityHTMLRepresentations}
    </div>
    `
}