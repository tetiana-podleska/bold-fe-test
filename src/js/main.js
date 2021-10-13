let dummyData = [
    {
        "author": "группа Кино",
        "day": "Friday",
        "date": 13.06,
        "shortDesc": "Популярная рок-группа 1980-х годов",
        "longDesc": "Oдна из самых популярных советских рок-групп 1980-х годов, входила в состав Ленинградского рок-клуба",
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
        "shortDesc": "Лидером и автором почти всех текстов и музыки неизменно оставался Виктор Цой",
        "longDesc": "Лидером и автором почти всех текстов и музыки неизменно оставался Виктор Цой, после смерти которого коллектив, выпустивший, в общей сложности, за девять лет в студийных альбомах более ста песен, прекратил существование.",
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
        "date": 14.04,
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
        "date": 12.06,
        "shortDesc": "Short description of the upcomming event. could be up to 3 lines of text",
        "longDesc": "long description of the upcoming event it should take at least 2 lines of text ot fit this design, so",
    },

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

let elems = document.getElementsByClassName('item-slider__slide');
console.log(elems);

for (let i = 0; i < elems.length; i++) {
    let divElem = elems[i].getElementsByClassName('hexagon-desc');
    for (let j = 0; j < divElem.length; j++) {
        // console.log(divElem[j].innerHTML);

        let days = elems[i].getElementsByClassName('item-day')
        for (let k = 0; k < days.length; k++) {
            days[k].innerHTML = dummyData[i].day
        }

        let dates = elems[i].getElementsByClassName('item-date')
            for (let k = 0; k < dates.length; k++) {
                dates[k].innerHTML = `${dummyData[i].date}`
            }

        let shortDesc = elems[i].getElementsByClassName('short-desc');
            for (let k = 0; k < shortDesc.length; k++) {
                shortDesc[k].innerHTML = `${dummyData[i].shortDesc}`
            }

             }
}

dummyData.map((elem) => {
    // for (let key in dummyData)
    let title = document.querySelector('.info-left');
    title.innerHTML = '';
    title.innerHTML = `<h1 class="item-title">${elem.author}</h1> `
    // console.log(title);
    // console.log(ind);
    // console.log(elem);

    let info = document.querySelector('.info-right');
    // info.innerHTML = '';
    info.innerHTML = `<p class="item-desc">${elem.longDesc}</p> `
    // console.log(info);
    // console.log(ind);

})

console.log(dummyData.sort((a, b) => a.date - b.date))


for (let i = 0; i < dummyData.length; i++) {
    console.log(dummyData[i].day);
}