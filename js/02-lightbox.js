import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

function creatGallery(galleryObj) {
    let result = [];

    for (const item of galleryObj ) {
        
        const a = document.createElement("a");
        const img = document.createElement("img");

        a.classList = "gallery__item";
        img.classList = "gallery__image";

        a.href = item.original;
        img.src = item.preview;

        img.alt = item.description;

        a.append(img);
            
        result.push(a);
    };
    return result;
};

galleryRef.append(...creatGallery(galleryItems));



let gallery = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250});
// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
