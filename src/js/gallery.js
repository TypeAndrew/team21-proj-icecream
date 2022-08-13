import Masonry from "masonry-layout";


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

  