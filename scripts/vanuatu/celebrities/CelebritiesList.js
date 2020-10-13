import { Celeb } from './Celebrity.js'
import { useCeleb } from './CelebritiesDataProvider.js'

export const CelebritiesList = () => {
    const contentElement = document.querySelector(".vanuatu__list")

    const celebs = useCeleb()

    let celebHTMLRepresentation = ""
    for (const celebrity of celebs) {
        celebHTMLRepresentation += Celeb(celebrity)
    }

    contentElement.innerHTML += `
    <section class="celebList">
    <h3>Who to know in Vanuatu</h3>
    <div class="celebContainer">
    ${celebHTMLRepresentation}
    </div>
    </section>
    `
}