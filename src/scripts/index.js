'use strict'

import giphy from "./giphy";
import '../styles/index.scss';
const form = document.forms.search;

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let query = form.querySelector('.search__field').value;
  giphy.search(query);
});
