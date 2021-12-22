import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const imgMarkup = createImgCard (galleryItems);

galleryList.insertAdjacentHTML('beforeend', imgMarkup);

createImgCard (galleryItems);

function createImgCard (galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="">
        <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
        </a>
        </div>`;
    }).join('');
}

galleryList.addEventListener('click', imageClick);

function imageClick(event){
    event.preventDefault();
    
    let originalImg = event.target.dataset.source; 
    
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${originalImg}"> 
    </div>`);
    
    instance.show(); 
};

