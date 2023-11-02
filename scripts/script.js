const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const input = document.querySelector('.input');
const add = document.querySelector('.add');

const sliderLine = document.querySelector('.slider_line');

const arr = ['../pictures/piter.jpg', '../pictures/piter1.jpg', '../pictures/piter2.jpg', '../pictures/piter3.jpg'];

//const arr = ['https://almode.ru/uploads/posts/2023-07/1688315173_almode-ru-p-samie-krasivie-mesta-sankt-peterburga-52.jpg', 'https://almode.ru/uploads/posts/2023-07/1688315170_almode-ru-p-samie-krasivie-mesta-sankt-peterburga-54.jpg', 'https://kopiberi.ru/uploads/images/feature_image/prevyu-4.jpg', ' '];

arr.forEach((img) =>{
    sliderLine.innerHTML += `<img src="${img}" alt ="" height="256" width="384">`
})

let offset = 0;

next.addEventListener('click', () => {
    offset = offset >= 384 * (arr.length - 1) ? 0 : offset + 384;
    
    sliderLine.style.right = `${offset}px`
    })
    
prev.addEventListener('click', () => {
    offset = offset <= 0 ? (384 * arr.length - 1) : offset - 384;
    
    sliderLine.style.right = `${offset}px`
    })
    
add.addEventListener('click', () => {
    arr.push(input.value);
    sliderLine.innerHTML += `<img src = "${img}" alt = "" height = "256" width = "384">`
    })
    