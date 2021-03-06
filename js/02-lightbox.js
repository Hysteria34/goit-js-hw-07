import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
let imgMarkup = galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>`;
}).join('');

galleryList.insertAdjacentHTML('beforeend', imgMarkup);

/*galleryList.addEventListener('click', imageClick);

function imageClick(event){
    console.log(event.target); 
    event.preventDefault();*/
    let instance = new SimpleLightbox('.gallery a', {
        captionsData:'alt', 
        captionDelay: '250',
    });
    instance.on(() => {
        instance.next();
    });
    
//};
