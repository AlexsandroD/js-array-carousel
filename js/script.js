const imgArray = [
    '../img/01.jpg',
    '../img/02.jpg',
    '../img/03.jpg',
    '../img/04.jpg',
    '../img/05.jpg',
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]
const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


console.log(imgArray)
let items = '';
let city ='';
let descrizione = '';
let thumbernail = '';

for(i = 0; i < imgArray.length &&  i < title.length && i < text.length; i++){
    items += 
    `

    <img class="pictures-main" src="${imgArray[i]}"  "alt="${title[i]}">
    <div class="text">
    <h1 class="city">${title[i]}</h1>
    <p class="description">${text[i]}</p>
    </div>
    `};

for(i = 0; i < imgArray.length; i++){
    thumbernail += ` 
    <div id="arrow-prev">&uarr;</div>
    <div id="arrow-next">&darr;</div>
    <div class="thumber-nail"><img src="${imgArray[i]}" alt="${title[i]}" class="pictures-thumb">
    </div>`
};

const itemsColRight = document.querySelector('.col-2');
itemsColRight.innerHTML = thumbernail;

const containerThumb = document.querySelector('.thumber-nail');
containerThumb.classList.add('active-t');

const itemsColLeft = document.querySelector('.col-1');
itemsColLeft.innerHTML = items;
const item = document.querySelector('.pictures-main');
item.classList.add('active');
const textContainer = document.querySelector('.text');
textContainer.classList.add('text-active')











