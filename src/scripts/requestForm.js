// Responsibility: Generate HTML for the request form. When Submit button is clicked, POST a new request to the API.

import { getCraftTypes } from "./dataAccess.js";

document.addEventListener("click", (clickEvt) => {
  if (clickEvt.target.id === "submitRequest") {
  }
});

export const RequestForm = () => {

  const craftTypes = getCraftTypes()

  let html = `
      <div class="field flex column">
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

       <button class="button" id="submitRequest">Submit Request</button>
      </div>
      `;

  return html;
};
