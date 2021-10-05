let dummyData = [
    {
        "author": "группа Кино",
        "day": "Friday",
        "date": 19.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
    },
    {
        "author": "группа DDT",
        "day": "Sunday",
        "date": 19.11,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
    },
    {
        "author": "группа Кино",
        "day": "Saturday",
        "date": 11.09,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
    },
    {
        "author": "группа DDT",
        "day": "Friday",
        "date": 16.08,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
    },
    {
        "author": "группа Сплин",
        "day": "Wednesday",
        "date": 16.04,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
    },
    {
        "author": "gogi",
        "day": "Monday",
        "date": 22.09,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
    },
    {
        "author": " mgzavrebi",
        "day": "Friday",
        "date": 19.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so",
    }
]


const slider = document.querySelector('.item-slider')

let mySlider = new Swiper(slider, {
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
});

let mappedDummy = dummyData.map((elem, ind) => {
    let slide = document.querySelector('.item-slider__hexagon');
    slide.innerHTML = '';
    slide.innerHTML = `<p class="item-day">${elem.day}</p> <p class="item-date">${elem.date}</p> <p class="short-desc">${elem.shortDesc}</p>
                            <button class="buy-btn">buy ticket</button>`
    console.log(slide);

})
console.log(mappedDummy);


