new Swiper('.item-slider', {
    grabCursor: true,
    slideToClickedSlide: true,
    mousewheel: {
        sensitivity: 1,
        eventsTarget: '.item-slider'
    },
    slidesPerView: 5,
    spaceBetween: 125,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    speed: 600,
    direction: 'vertical',
//     virtual: {
//         slides: (function () {
//             let slide = []
//             for (let i = 0; i < 5; i++) {
//                 slide.push(`<div class="item-slider__slide">
// <p class="item-day">Day ${i}</p>
// <p class="item-date">Date ${i}</p>
// <p class="short-desc">desc ${i}</p>
// <button class="buy-btn">buy ticket</button>
// </div>`);
//             }
//             return slide;
//         }()),
//     },
});