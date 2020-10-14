import { celebrity } from "./celebrity.js"
import { useCitizen } from  "./celebrityDataProvider.js"


export const CelebrityList = () => {
   const elementContent = document.querySelector(".china__container")
   const citizens = useCitizen()
    let citizenHTMLRepresentations = ""

   for (const person of citizens) {
       citizenHTMLRepresentations += celebrity(person)

   }

   elementContent.innerHTML += `
   <div class="china__sites" id="china__citizens">
   <h3>Famous Citizens</h3>
   <p>${citizenHTMLRepresentations}</p>
   </div>`

}



