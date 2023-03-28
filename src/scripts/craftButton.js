// Responsibility: Generate the HTML for the complete requests button, and POST a new item to the API when clicked.

import { saveCompletion, setIngredients, creat, getCompletions} from "./dataAccess.js"

export const craftButton = () => {
return`<button class="button" id="button-craft">Finish</button>`
}

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", (event) => {

    if (event.target.id === "button-craft") {

        //GRAB THE IDS FROM THE DROPDOWNS
        const selectedRequest = parseInt(document.querySelector('select[id="craft-requests"]').value)
        const selectedCrafter = parseInt(document.querySelector('select[id="crafter"]').value)

        //assign the ID based on the current length of craftRequets (need it to be assigned manually to pass it into the craftIngredients() function when saving it)
        const currentCompletions = getCompletions()
        const newCompletionId = currentCompletions.length + 1
       
        // CREATE A NEW COMPLETION OBJECT
        const completion = {
            id: newCompletionId,
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
