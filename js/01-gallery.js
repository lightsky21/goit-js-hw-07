import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');


function makeGalleryItemsMarkup(galleryItems) {
   const GalleryItemsMarkup =  galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href= "${original}">
    <img
      class="gallery__image"
      src= "${preview}"
      data-source= ${original}
      alt= "${description}"
    />
  </a>
</div>`).join('')
   
    galleryEl.insertAdjacentHTML('beforeend', GalleryItemsMarkup);
}

 makeGalleryItemsMarkup(galleryItems);



galleryEl.addEventListener('click', onGalleryElClick)

function onGalleryElClick(e) {
    e.preventDefault();
    const isGalleryImageEl = e.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return
    }
    const GalleryImageElUrl = e.target.dataset.source;
   
}
