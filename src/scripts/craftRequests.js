// Responsibility: Generate HTML for the dropdown of craftRequests.
// *Criteria: Only incomplete requests should be converted to options*

import { getCompletions, getCraftRequests } from "./dataAccess.js";

export const createCraftRequests = () => {

  const requests = getCraftRequests();
  const completions = getCompletions();

  return `
    <h3>Requests</h3>
    <select id="craft-requests">
        <option value="0">--Choose A Request--</option>
        ${requests.map(request => {

        //make sure there are no matching completions before generating html for each request
          const matchingCompletion = completions.find((completion) => {
            return request.id === parseInt(completion.craftRequestId)
          })

          if (!matchingCompletion) {
            return `<option class="option-request" value="${request.id}">${request.name}</option>`
          }
        }).join("")}
                
        </select>`;
};
