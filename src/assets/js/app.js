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

 var persents = (price.totalS2 * price.totalS1) + (price.totalS3 * price.totalS1) + (price.totalS4 * price.totalS1)   ;
 var profit = (price.totalS1 * price.totalS2 * 0.25) + (price.totalS1 * price.totalS3 * 0.05) + (price.totalS1 * price.totalS4 * 0.70);
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
values: [1,2,3,4,5],
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
 values: [95000,100000,110000,120000,130000,135500,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000],
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
 values: [100000,110000,120000,130000,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000,360000,370000,380000,390000,400000,410000,420000,430000,440000,450000,460000,470000,480000,490000,500000],
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
 values: [50000,60000,70000,80000,90000,100000,110000,120000,130000,135500,140000,150000,160000,170000,180000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000],
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