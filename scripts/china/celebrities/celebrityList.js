import { celebrity } from "./celebrity.js"
import { useCitizen } from  "./celebrityDataProvider.js"


export const CelebrityList = () => {
   const elementContent = document.querySelector(".china__citizens")
   const citizens = useCitizen()
    let citizenHTMLRepresentations = ""

   for (const person of citizens) {
       citizenHTMLRepresentations += celebrity(person)

   }

   elementContent.innerHTML += `
   <div class=china__citizens>
   <h3>Famous Citizens</h3>
   <p>${citizenHTMLRepresentations}</p>
   </div>`

}



