import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

const refs = {
    gallery: document.querySelector(".gallery"),

}

console.log(refs.gallery);

function creatGallery(galleryObj) {
    let result = [];

    for (const item of galleryObj ) {
        
        const div = document.createElement("div");
        const a = document.createElement("a");
        const img = document.createElement("img");

        div.classList = "gallery__item";
        a.classList = "gallery__link";
        img.classList = "gallery__image";

        a.href = item.original;
        img.src = item.preview;

        img.alt = item.description;
        img.dataset.source = item.original;;

        a.append(img);
        div.append(a);
            
        result.push(div);
    };
    return result;
};

refs.gallery.append(...creatGallery(galleryItems));

function imgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
 
    const modal = basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280" height="1040">`, {
        onShow: () => {
            document.addEventListener("keydown", onEscCloseModal);
            console.log("open modal");
        },

        onClose: () => { 
            document.removeEventListener("keydown", onEscCloseModal);
            console.log("close modal");
        },
    });

    modal.show();

    function onEscCloseModal(event) {
        if (event.code === "Escape") {
            modal.close();
        };
    };
};

refs.gallery.addEventListener("click", imgClick);
