// Responsibility: Generate HTML for the request form. When Submit button is clicked, POST a new request to the API.

import { getCraftRequests, getCraftTypes, saveCraftRequest } from "./dataAccess.js";

document.addEventListener("click", (event) => {
  if (event.target.id === "button-request") {
    // Get what the user typed into the form fields
    const userName = document.querySelector('input[id="name"]').value
    const userPurpose = document.querySelector('input[id="purpose"]').value
    const userType = document.querySelector('select[id="type"]').value

    //assign the ID based on the current length of craftRequets
    const currentRequests = getCraftRequests()
    const newRequestId = currentRequests.length + 1

    // Create a request object out of the user input
    const newRequestObject = {
        id: newRequestId,
        name: userName,
        intendedUse: userPurpose,
        craftTypeId: parseInt(userType)
    }

    // Send the letter to the API for permanent storage
    saveCraftRequest(newRequestObject)
    console.log(`request for ${userName} sent`)
  }
});

export const RequestForm = () => {

  const craftTypes = getCraftTypes()

  return`
      <div class="field flex column request-form">
       <label class="label" for="name">Name</label>
       <input type="text" id="name" class="input">

       <label class="label" for="purpose">Purpose</label>
       <input type="text" id="purpose" class="input">

       <label class="label" for="type">Type</label>
       <select id="type">
          <option value="0">Select a Type</option>
          ${craftTypes.map(type => {
                    return `<option class="option-type" value="${type.id}">${type.type}</option>`}).join("")
            }
      </select>

       <button class="button" id="button-request">Submit Request</button>
      </div>
      `
}
