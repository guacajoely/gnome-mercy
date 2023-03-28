// Responsibility: Generate the HTML for all completed potions and elixirs

import { getCompletions, getCraftRequests } from "./dataAccess.js"

export const createCompletions = () => {

  const requests = getCraftRequests()
  const completions = getCompletions()

  return `<h3>Completed Potions and Elixers</h3>
          <ul id="list-completions">
              ${completions.map(completion => {

                const matchingRequest = requests.find((request) => {
                  return request.id === parseInt(completion.craftRequestId)
                })
                        return `<li class="completion" id="${completion.id}"/><img src="./images/icon-potion.png"/>${matchingRequest.name}</li>`}).join("")
              }
          </ul>`
  }