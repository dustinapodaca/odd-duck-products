'use strict';

let clicks = 0;
let maxClicksAllowed = 25;

let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

function Product (name, path) {
  this.name = name;
  this.path = path;
  this.clicked = 0;
  this.shown = 0;
  Product.allProductsArray.push(this);
}

Product.allProductsArray = [];

function getRandomNumber() {
  return Math.floor(Math.random() * Product.allProductsArray.length);
}

function generateRandomPicture() {
  // call the getRandomNumber
  let imgOne = getRandomNumber();
  let imgTwo = getRandomNumber();
  let imgThree = getRandomNumber();

  while (imgOne === imgTwo || imgOne === imgThree || imgTwo === imgThree) {
    imgOne = getRandomNumber();
    imgTwo = getRandomNumber();
    imgThree = getRandomNumber();
  }
  image1.src = Goat.allGoatsArray[goat1].src;
  image2.src = Goat.allGoatsArray[goat2].src;
  image1.alt = Goat.allGoatsArray[goat1].name;
  image2.alt = Goat.allGoatsArray[goat2].name;
  Goat.allGoatsArray[goat1].views++;
  Goat.allGoatsArray[goat2].views++;
}



new Product('bag', './img/bag.jpg');
new Product('banana', './img/banana.jpg');
new Product('bathroom', './img/bathroom.jpg');
new Product('boots', './img/boots.jpg');
new Product('breakfast', './img/breakfast.jpg');
new Product('bubblegum', './img/bubblegum.jpg');
new Product('chair', './img/chair.jpg');
new Product('cthulhu', './img/cthulhu.jpg');
new Product('dog-duck', './img/dog-duck.jpg');
new Product('dragon', './img/dragon.jpg');
new Product('pen', './img/pen.jpg');
new Product('pet-sweep', 'pet-sweep.jpg');
new Product('scissors', './img/scissors.jpg');
new Product('shark', './img/shark.jpg');
new Product('sweep', './img/sweep.jpg');
new Product('tauntaun', './img/tauntaun.jpg');
new Product('unicorn', './img/unicorn.jpg');
new Product('water-can', './img/water-can.jpg');
new Product('wine-glass', './img/wine-glass.jpg');

