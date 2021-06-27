console.log('file 1');
var srvPrices = {}
var c1 = document.getElementById("s3-check1");
var c2 = document.getElementById("s3-check2");


function sliderHandler(price) {
 //calculate
// if (price === undefined) {
//  price = srvPrices;
// } 

 // var persents = (price.totalS1 * 12000) + (price.totalS2 * 1070) + (price.totalS3 * 40000) + (price.totalS4 * 21000);
 // var profit = persents * 0.3;
 // document.getElementById("s1").innerHTML = persents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
 // document.getElementById("s2").innerHTML = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей'; //
}

var srvPrices = {}
var c1 = document.getElementById("s3-check1");
var c2 = document.getElementById("s3-check2");


$(".range1").ionRangeSlider({
from: 3,
grid: false,
values: [5,7,10,13,15],
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
 values: [30,50,70,90,110],
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
 values: [10,14,18,22,26],
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
 values: [2,4,6,8,10],
 onChange: function (data) {
 srvPrices.totalS4 = data.from_value;
 sliderHandler(srvPrices)
 },
 onStart: function(data) {
 srvPrices.totalS4 = data.from_value;
 sliderHandler(srvPrices)
 }
});
