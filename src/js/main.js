let dummyData = [
    {
        "author": "группа Кино",
        "day" : "Friday",
        "date": 19.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "01"
    },
    {
        "author": "группа DDT",
        "day" : "Sunday",
        "date": 19.11,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "02"
    },
    {
        "author": "группа Кино",
        "day" : "Saturday",
        "date": 11.09,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "03"
    },
    {
        "author": "группа DDT",
        "day" : "Friday",
        "date": 16.08,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "04"
    },
    {
        "author": "группа Сплин",
        "day" : "Wednesday",
        "date": 16.04,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "05"
    },
    {
        "author": "gogi",
        "day" : "Monday",
        "date": 22.09,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "06"
    },
    {
        "author": " mgzavrebi",
        "day" : "Friday",
        "date": 19.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so consider the variability",
        "id": "07"
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

document.querySelector('.item-slider__slide').innerHTML = `<div class="hexagon-desc"></div>`
for (let key in dummyData) {
    let item = document.createElement('p')
    item.innerHTML = `<p class="item-day">${key}</p>`
    document.querySelector('.hexagon-desc').appendChild(item)

    for (let i = 0; i < dummyData[key].length; i++) {
let elem = document.createElement('p')
        elem.innerHTML = `
        <p>${dummyData[key][i][0]}</p>
        <p>${dummyData[key][i][2]}</p>
        <p>${dummyData[key][i][3]}</p>
        `
        document.querySelector('.hexagon-desc').appendChild(elem)
    }
}
//
// for (let i = 0; i < dummyData.length; i++) {
//     console.log(dummyData[i]);
//     let slide = document.querySelector('.item-slider__hexagon')
//     console.log(slide);
//
// }
//
// for (let i in dummyData) {
//     let element = document.querySelector('.item-slider__hexagon')
//     if(element) {
//         element.innerHTML = dummyData[i]
//     }
// }

// https://www.youtube.com/watch?v=TYRJ_X9qMSE&ab_channel=ITDoctor