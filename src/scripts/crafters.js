// Responsibility: Generate HTML for the dropdown of crafters. When one is selected, update transient state.

import { getCrafters } from "./dataAccess.js";

export const createCrafters = () => {

  const crafters = getCrafters();

  return `
      <h3>Crafters</h3>
      <select id="crafter">
          <option value="0">--Choose A Crafter--</option>
          ${crafters.map(crafter => {
            return `<option class="option-crafter" value="${crafter.id}">${crafter.name}</option>`}).join("")
          }
      </select>`;
};
