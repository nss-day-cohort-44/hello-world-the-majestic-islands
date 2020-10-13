import { useLandmark } from "./LandmarkDataProvider.js"
import { Landmarks } from "./Landmarks.js"




export const LandmarksList = () => {

    const contentElement = document.querySelector(".sweden__sites")

    const places = useLandmark()

    let landmarkHTMLRepresentations = ""

    for ( const sight of sights ) {
        landmarkHTMLRepresentations += Cities(sight)
    }

    contentElement.innerHTML += `
    <h3>Landmarks of Sweden</h3>
         <div class="landmarks">
        ${landmarkHTMLRepresentations}
        </div>
    `
}