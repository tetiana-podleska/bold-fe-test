let dummyData = [
    {
        "author": "группа Кино",
        "day" : "Friday",
        "date": 19.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "01"
    },
    {
        "author": "группа DDT",
        "day" : "Sunday",
        "date": 19.11,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "02"
    },
    {
        "author": "группа Кино",
        "day" : "Saturday",
        "date": 11.09,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "03"
    },
    {
        "author": "группа DDT",
        "day" : "Friday",
        "date": 16.08,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "04"
    },
    {
        "author": "группа Сплин",
        "day" : "Wednesday",
        "date": 16.04,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "05"
    },
    {
        "author": "gogi",
        "day" : "Monday",
        "date": 22.09,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "06"
    },
    {
        "author": " mgzavrebi",
        "day" : "Friday",
        "date": 19.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "_id": "07"
    }
]
console.log(dummyData);

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
});

let isActive = document.querySelector('.swiper-slide-active');
console.log(isActive);
let prevSlide = document.querySelector('.swiper-slide-prev');
console.log(prevSlide);
let nextSlide = document.querySelector('.swiper-slide-next')
console.log(nextSlide);

if(isActive) {
    dummyData.find()
}