'use strict'

import queryString from 'query-string';
const gallery = document.querySelector('.gallery');
const notFound = document.querySelector('.not-found');

const createGiphy = (query, data) => {

  gallery.innerHTML = '';
  notFound.textContent = '';
  notFound.classList.remove('not-found--active');

  if ([...data].length === 0) {

    notFound.classList.add('not-found--active');
    notFound.textContent = "We couldn't find any GIFs with the search query: " + query + '.';

  } else {

    data.forEach(picture => {
      gallery.innerHTML +=
      `<a class="gallery__item">
        <img src="${picture.images.downsized.url}" alt="Gallery Item" />
      </a>`

    })
  }
}

const search = (query) => {

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${query}&limit=3`)
  .then(response => response.json())
  .then(response => createGiphy(query, response.data));
}

export default { search };
