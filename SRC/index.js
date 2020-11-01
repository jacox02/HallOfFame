const image = document.body.getElementsByTagName('img');
const modal = document.getElementById('modalIMG');
const modalClose = document.getElementById('closeModalButton');
const modelMain = document.getElementById('modalMain');

const closeModal = modalClose.addEventListener('click', () => {
    modelMain.classList.remove('is-active');
})

for (const imageNode in image) {
    if (image.hasOwnProperty(imageNode)) {
        const element = image[imageNode];
        element.addEventListener('click', () => {
            modelMain.classList.add('is-active');
            modal.src = element.src
        })
    }
}

