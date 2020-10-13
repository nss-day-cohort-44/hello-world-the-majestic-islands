import { landmark } from "./landmark.js"
import { useLandmarks } from "./landmarkDataProvider.js"

export const LandmarkList = () => {
    const contentElement = document.querySelector(".china__landmarks")
    const landMarks = useLandmarks()
    let landmarkHTMLRepresentaion = ""

    for (const sites of landMarks) {
        
        landmarkHTMLRepresentaion += landmark(sites)

    }

    contentElement.innerHTML += `
    <div>
        <h3>Sites</h3>
        <p>${landmarkHTMLRepresentaion}</p>
        </div>`
}