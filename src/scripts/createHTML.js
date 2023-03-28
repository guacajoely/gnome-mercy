//Responsibility: Generate the entire HTML string template for Gnome Mercy by using all other HTML generation components.

import { RequestForm } from "./requestForm.js";

export const createHTML = () => {
  return `
      <h1>Gnome Mercy</h1>
      ${RequestForm()}



      `;
};
