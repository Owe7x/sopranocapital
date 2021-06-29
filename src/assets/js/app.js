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
 var profit = (price.totalS1 * price.totalS2 * 0.25) + (price.totalS1 * price.totalS3 * 0.05) + (price.totalS1 * price.totalS4 * 0.70) - 177937;
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
 values: [95000,100000,110000,111000,112000,113000,114000,115000,116000,117000,118000,119000,120000,121000,122000,123000,124000,125000,126000,127500,128000,129000,130000,135500,140000,150000,160000,170000,180000,190000,200000,209500,210000,211000,211500,212000,212500,213000,213500,214000,214500,215000,216000,216500,217000,217500,218000,218500,219000,219500,220000,221000,221500,222000,222500,223000,223500,224000,224500,225000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000],
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
 values: [100000,110000,120000,121000,122000,123000,124000,125000,126000,127500,128000,129000,130000,140000,150000,160000,170000,180000,190000,191000,192000,193000,194000,195000,196000,197000,198000,199000,200000,210000,211000,211500,212000,212500,213000,213500,214000,214500,215000,216000,216500,217000,217500,218000,218500,219000,219500,220000,221000,221500,222000,222500,223000,223500,224000,224500,225000,226000,227000,228000,229000,230000,240000,250000,260000,270000,280000,291000,292000,293000,294000,295000,296000,297000,298000,299000,300000,301000,302000,303000,310000,320000,330000,340000,350000,360000,370000,380000,390000,391000,392000,393000,394000,395000,396000,397000,398000,399000,400000,410000,420000,430000,440000,450000,460000,470000,480000,490000,500000],
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
 values: [50000,60000,70000,80000,90000,100000,110000,120000,130000,135500,140000,150000,160000,165000,167000,168000,169000,170000,171000,172000,173000,174000,175000,176000,177000,178000,179000,180000,181000,182000,183000,184000,185000,190000,200000,210000,220000,230000,240000,250000,260000,270000,280000,290000,300000,310000,320000,330000,340000,350000],
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