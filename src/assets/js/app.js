document.querySelector('.brands-btn').onclick = function() {
  document.querySelector('.brands-block-none').classList.toggle('visible');
  document.querySelector('.brands-btn').hidden = true
}

console.log('file 1');
var srvPrices = {}
var c1 = document.getElementById("s3-check1");
var c2 = document.getElementById("s3-check2");


function sliderHandler(price) {
 
  if (price === undefined) {
  price = srvPrices;
 } 

 var persents = price.totalS1 * (price.totalS2 + price.totalS3 + price.totalS4);
 var profit = persents - 177937;
 document.getElementById("s1").innerHTML = persents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
 document.getElementById("s2").innerHTML = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей'; //
 document.getElementById("s3").innerHTML = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей'; //
}

var srvPrices = {}
var c1 = document.getElementById("s3-check1");
var c2 = document.getElementById("s3-check2");


$(".range1").ionRangeSlider({
from: 3,
grid: false,
values: [3,4,5,6,7,8,9,10],
onChange: function (data) {
  srvPrices.totalS1 = data.from_value;
  sliderHandler(srvPrices)
},
onStart: function(data) {
  srvPrices.totalS1 = data.from_value;
  sliderHandler(srvPrices)
}
});  
$(".range2").ionRangeSlider({
 from: 2,
 grid: false,
 values: [95000,127500,222500,350000],
 onChange: function (data) {
 srvPrices.totalS2 = data.from_value;
 sliderHandler(srvPrices)
 },
 onStart: function(data) {
 srvPrices.totalS2 = data.from_value;
 sliderHandler(srvPrices)
 }
});
$(".range3").ionRangeSlider({
 from: 5,
 grid: false,
 values: [100000,200000,300000,400000,500000],
 onChange: function (data) {
 srvPrices.totalS3 = data.from_value;
 sliderHandler(srvPrices)
 },
 onStart: function(data) {
 srvPrices.totalS3 = data.from_value;
 sliderHandler(srvPrices)
 }
});
$(".range4").ionRangeSlider({
 from: 10,
 grid: false,
 values: [50000,175000,300000],
 onChange: function (data) {
 srvPrices.totalS4 = data.from_value;
 sliderHandler(srvPrices)
 },
 onStart: function(data) {
 srvPrices.totalS4 = data.from_value;
 sliderHandler(srvPrices)
 }
});

$('.slider-1').slick( {
  infinite: true,
  dots: false,
});