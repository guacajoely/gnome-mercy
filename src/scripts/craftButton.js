// Responsibility: Generate the HTML for the complete requests button, and POST a new item to the API when clicked.

import { saveCompletion, setIngredients } from "./dataAccess.js"

export const craftButton = () => {
return`<button class="button" id="button-craft">Finish</button>`
}

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", (event) => {

    if (event.target.id === "button-craft") {

        //GRAB THE IDS FROM THE DROPDOWNS
        const selectedRequest = parseInt(document.querySelector('select[id="craft-requests"]').value)
        const selectedCrafter = parseInt(document.querySelector('select[id="crafter"]').value)
       
        // CREATE A NEW COMPLETION OBJECT
        const completion = {
            craftRequestId: selectedRequest,
            crafterId: selectedCrafter
        }

        //CALL THE SAVECOMPLETION FUNCTION PASSING IN THE OBJECT WE JUST CREATED
        saveCompletion(completion).then(() => {

            console.log(`A completion has been created for request #${selectedRequest}`)

        //SAVE INGREDIENTS USING FUNCTION SUPPLIED WITH BOILERPLATE CODE
        // setIngredients()
        // createCraftIngredients()

        })
    }
})
