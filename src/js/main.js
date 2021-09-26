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
    speed: 900,
    direction: 'vertical',
    // virtual: {
    //     slides: fetch('/info.json', {
    //         method: 'GET',
    //         headers: {
    //             'Content-type': 'application/json'
    //         }
    //     })
    //         .then(resp => resp.json())
    //         .then(data => data.results.sort(a, b) => b.event_id - a.event_id))
    //         .then(event => event.forEach((ev) => {
    //
    //         })
    //
    // },
});