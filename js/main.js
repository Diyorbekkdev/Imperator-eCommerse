function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}


const decrementBtn = document.querySelector('#decrement-btn');
const incrementBtn = document.querySelector('#increment-btn');
const countDisplay = document.querySelector('#count-display');

let count = 0;

decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    countDisplay.textContent = count;
  }
});

incrementBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
  body.classList.remove('active');
})

let products = [
    {
      id: 1,
      name: 'Product Name 1',
      images: '1.png',
      price: 120000
    },
    {
      id: 2,
      name: 'Product Name 1',
      images: '2.png',
      price: 120000
    },
    {
      id: 3,
      name: 'Product Name 1',
      images: '3.png',
      price: 120000
    },
    {
      id: 4,
      name: 'Product Name 1',
      images: '4.png',
      price: 120000
    },
];

let listCards = [];
function initApp(){
  products.forEach((value, key)=>{
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <img src= "imgaes/${value.imgae}"/>
    <div class = "title">${value.name}</div>
    <div class = "price">${value.price.toLocaleString()}</div>
    <button onclick = "addToCard(${key})"> Add To Card </button>`;
    list.appendChild(newDiv);
  })
}
initApp();



