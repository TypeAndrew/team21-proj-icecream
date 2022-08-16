/*import Masonry from "masonry-layout";


window.onload = () => {

    const grid = document.querySelector('.gallery__grid');

    const masonry = new Masonry(grid, {
        itemSelector: '.gallery__grid-item',
        columnWidth: 10,
        gutternWidth : 0,
        gutter: 0,
        originLeft: false,
        originTop: false
    });


};
const cards = document.querySelectorAll('.gallery__grid-item');

cards.forEach(card => {
  card.addEventListener('mousemove', onMousemoveCardHandler);
  card.addEventListener('mouseleave', onMouseleaveCardHandler);
});

function onMousemoveCardHandler(evt) {
  const cardInner = this.querySelector('.gallery__grid-img');
  const halfHeight = cardInner.offsetHeight / 8;
  const halfWidth = cardInner.offsetWidth / 8;
  const y = evt.offsetY;
  const x = evt.offsetX;
  cardInner.style.transform = `rotateX(${(-y + halfHeight) / 5}deg) rotateY(${
    (x - halfWidth) / 4
  }deg)`;
}

function onMouseleaveCardHandler(evt) {
  const cardItem = this.querySelector('.gallery__grid-img');

  cardItem.style.transform = '';
}*/

  