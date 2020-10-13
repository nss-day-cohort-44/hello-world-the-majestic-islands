import { useLandmark } from "./LandmarkDataProvider.js"
import { Landmarks } from "./Landmarks.js"




export const LandmarksList = () => {

    const contentElement = document.querySelector(".sweden__sites")

    const sights = useLandmark()

    let landmarkHTMLRepresentations = ""

    for ( const sight of sights ) {
        landmarkHTMLRepresentations += Landmarks(sight)
    }

    contentElement.innerHTML += `
    <div class="box">
    <h3 class="title">Landmarks of Sweden</h3>
         <div class="landmarks">
        ${landmarkHTMLRepresentations}
        </div>
    </div>
    `
}