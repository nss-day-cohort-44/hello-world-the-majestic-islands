import { Landmark } from './Landmark.js'
import { useLandmark } from './LandmarkDataProvider.js'

export const LandmarkList = () => {
    const contentElement = document.querySelector(".vanuatu__list")

    const landmarks = useLandmark()

    let landmarkHTMLRepresentations = ""
    for (const name of landmarks) {
        
        landmarkHTMLRepresentations += Landmark(name)
    }

    contentElement.innerHTML += `
    <section class="landmarkList"  id="vanuatuContainer">
    <h3>What to do in Vanuatu</h3>
    <div class="landmarkContainer">
    ${landmarkHTMLRepresentations}
    </div>
    </section>
    `
}