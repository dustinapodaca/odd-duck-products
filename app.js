'use strict';

let clicks = 0;
let maxClicksAllowed = 25;
let clickCounter = 24;

let imgContainer = document.getElementById('imgContainer');
// let resultButton = document.getElementById('resultButton');
let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');



function Product(name, path) {
  this.name = name;
  this.path = path;
  this.clicks = 0;
  this.views = 0;
  Product.allProductsArray.push(this);
}

Product.allProductsArray = [];

//console.log(Product.allProductsArray);

function getRandomNumber() {
  return Math.floor(Math.random() * Product.allProductsArray.length);
}

let imgIndexArray = [];

// Click Counter
// onClick called in HTML onclick
function onClick() { 
  document.getElementById('clicks').innerHTML = clickCounter;
}

function generateRandomPicture() {
  // call the getRandomNumber
  // I need to create a loop here to generate unique pictures.
  while (imgIndexArray.length < 6) {
    let random = getRandomNumber();
    if (!imgIndexArray.includes(random)) {
      imgIndexArray.push(random);
    }
  }

  let imgOneIndex = imgIndexArray.shift();
  let imgTwoIndex = imgIndexArray.shift();
  let imgThreeIndex = imgIndexArray.shift();

  while (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    imgOneIndex = getRandomNumber();
    imgTwoIndex = getRandomNumber();
    imgThreeIndex = getRandomNumber();
  }
  imgOne.src = Product.allProductsArray[imgOneIndex].path;
  imgOne.alt = Product.allProductsArray[imgOneIndex].name;
  imgOne.name = Product.allProductsArray[imgOneIndex].name;
  Product.allProductsArray[imgOneIndex].views++;

  imgTwo.src = Product.allProductsArray[imgTwoIndex].path;
  imgTwo.alt = Product.allProductsArray[imgTwoIndex].name;
  imgTwo.name = Product.allProductsArray[imgTwoIndex].name;
  Product.allProductsArray[imgTwoIndex].views++;

  imgThree.src = Product.allProductsArray[imgThreeIndex].path;
  imgThree.alt = Product.allProductsArray[imgThreeIndex].name;
  imgThree.name = Product.allProductsArray[imgThreeIndex].name;
  Product.allProductsArray[imgThreeIndex].views++;
}

//Event Handlers
function handleClick(event) {
  if (event.target === imgContainer) {
    alert('Please click on an image');
  }
  clicks++;
  clickCounter--;
  let clickImg = event.target.alt;
  for (let i = 0; i < Product.allProductsArray.length; i++) {
    if (clickImg === Product.allProductsArray[i].name) {
      Product.allProductsArray[i].clicks++;
      break;
    }
  }
  if (clicks === maxClicksAllowed) {
    alert('You have reached the maximum number of selections.');

    imgContainer.removeEventListener('click', handleClick);
    imgContainer.className = 'no-voting';
    displayChart();
  } else {
    // LOCAL STORAGE STRINGIFY----------------------------------------------------------------
    // const stringData = JSON.stringify(Product.allProductsArray);
    const stringData = Product.allProductsArray;
    // console.log('stringified products >>>', stringData);
    // LOCAL STORAGE SETITEM --------------------------------------------------------------
    localStorage.setItem('stringData', JSON.stringify(stringData));
    generateRandomPicture();
  }
}

// function displayResults() {
//   let ul = document.getElementById('resultsList');
//   for (let i = 0; i < Product.allProductsArray.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${Product.allProductsArray[i].name} had ${Product.allProductsArray[i].views} views and was clicked ${Product.allProductsArray[i].clicks} times.`;
//     ul.appendChild(li);
//   }
// }

// chart.js

function displayChart() {
  let productNames = [];
  let productClicks = [];
  let productViews = [];

  for (let i = 0; i < Product.allProductsArray.length; i++) {
    productNames.push(Product.allProductsArray[i].name);
    productClicks.push(Product.allProductsArray[i].clicks);
    productViews.push(Product.allProductsArray[i].views);
  }

  const chartGraphics = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Number of Votes',
        data: productClicks,
        backgroundColor: [
          'rgb(255, 253, 185)',
        ],
        borderColor: [
          'rgb(236, 177, 156)'
        ],
        borderWidth: 1
      },
      {
        label: 'Number of Views',
        data: productViews,
        backgroundColor: [
          'rgb(236, 177, 156)'
        ],
        borderColor: [
          'rgb(224, 150, 123)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  let canvasChart = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(canvasChart, chartGraphics);
}

new Product('Bag', './img/bag.jpg');
new Product('Banana', './img/banana.jpg');
new Product('Bathroom', './img/bathroom.jpg');
new Product('Boots', './img/boots.jpg');
new Product('Breakfast', './img/breakfast.jpg');
new Product('Bubblegum', './img/bubblegum.jpg');
new Product('Chair', './img/chair.jpg');
new Product('Cthulhu', './img/cthulhu.jpg');
new Product('Dog-duck', './img/dog-duck.jpg');
new Product('Dragon', './img/dragon.jpg');
new Product('Pen', './img/pen.jpg');
new Product('Pet-sweep', './img/pet-sweep.jpg');
new Product('Scissors', './img/scissors.jpg');
new Product('Shark', './img/shark.jpg');
new Product('Sweep', './img/sweep.jpg');
new Product('Tauntaun', './img/tauntaun.jpg');
new Product('Unicorn', './img/unicorn.jpg');
new Product('Water-can', './img/water-can.jpg');
new Product('Wine-glass', './img/wine-glass.jpg');

// LOCAL STORAGE RETREVIAL -------------------------------------------------
const storedProducts = localStorage.getItem('stringData');
if (storedProducts) {
  Product.allProductsArray = JSON.parse(storedProducts);
}
// console.log('storedProducts', storedProducts);
// const parsedProducts = JSON.parse(storedProducts);
// console.log('parsed Products >>>', parsedProducts);
console.log(storedProducts);

generateRandomPicture();
imgContainer.addEventListener('click', handleClick);

