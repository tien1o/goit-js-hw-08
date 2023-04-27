// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const galleryMarkup = galleryItems.map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </li>`
  );

  gallery.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
  console.log(galleryItems);

  new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
});
