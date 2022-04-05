import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


function makeGalleryItemsMarkup(galleryItems) {
    const GalleryItemsMarkup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('')
   
    galleryEl.insertAdjacentHTML('beforeend', GalleryItemsMarkup);
}

 makeGalleryItemsMarkup(galleryItems);