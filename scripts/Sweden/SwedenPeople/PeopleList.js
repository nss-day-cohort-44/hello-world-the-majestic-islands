import { People } from "./People.js"
import { usePeople } from "./PeopleDataProvider.js"



export const PeopleList = () => {

    const contentElement = document.querySelector(".sweden__sites")

    const peers = usePeople()

    let peopleHTMLRepresentations = ""

    for ( const peer of peers ) {
        peopleHTMLRepresentations += People(peer)
    }

    contentElement.innerHTML += `
    <h3>People of Interest in Sweden</h3>

            <div class="citizens">
                ${peopleHTMLRepresentations}
            </div>
    `
}