let count = 0;
//модальне вікно купона
const coupon = document.querySelector('.coupon');
const couponLink = document.querySelector('.coupon__link');
const couponCloseBtn = document.querySelector('.coupon__closeBtn');
const cuponNumberBlock = document.querySelector('.coupon__number');

couponLink.addEventListener('click', showCouponModal);
couponCloseBtn.addEventListener('click',showCouponModal);

function showCouponModal(e){
	e.preventDefault()
	coupon.classList.toggle('hide');
	document.body.classList.toggle('overflowYHidden')
}

//генерація чисел купона
let cuponNumber = '';
for(let i=0;i<8;i++){
	cuponNumber+= Math.round(Math.random()*10);
}
cuponNumberBlock.innerText = cuponNumber;


//стиль модалки
//Swal.fire({
	//title: 'Coupons',
	//showClass: {
	  //popup: 'animate__animated animate__fadeInDown'
	//},
	//hideClass: {
	  //popup: 'animate__animated animate__fadeOutUp'
	//}
  //})


//додавати і віднімати замовлення

const orderAddItemBtn = document.querySelectorAll('.order__addItemBtn');
const orderSum = document.querySelector('.order__sum');
const orderCouponInp = document.querySelector('.order__couponInp');
const orderRemoveItemBtn = document.querySelectorAll('.order__removeItemBtn');
const sumSend = document.querySelectorAll('.sumSend');
let orderPrice = 0;

orderAddItemBtn.forEach(function(el){
	el.addEventListener('click', addOrderItem);
})

orderRemoveItemBtn.forEach(function(el){
	el.addEventListener('click', removeOrderItem);
})


function addOrderItem(){
	orderPrice += parseInt(this.previousElementSibling.innerText);
	orderSum.innerText = orderPrice;
}

function removeOrderItem(){
	orderPrice -= parseInt(this.nextElementSibling.innerText);
	orderSum.innerText = orderPrice;
}

//щоб розраховувати суму з купоном
const orderCupounBtn = document.querySelector('.order__cupounBtn');
orderCupounBtn.addEventListener('click', checkDiscount);

function checkDiscount(){
	if(orderCouponInp.value == cuponNumber){
		orderSum.innerText = orderPrice*0.7
	}
	sumSend.value = orderSum;
}

//перемекач режимів день/ніч
const timeSun = document.querySelector('.time__sun');
const timeMoon = document.querySelector('.time__moon');
const container = document.querySelector('.container');

timeSun.addEventListener('click',toggleTimeOfDay);
timeMoon.addEventListener('click',toggleTimeOfDay);

function toggleTimeOfDay(){
	count++
	if (count>1) {
		container.classList.add('transition03s')
	}
	timeSun.classList.toggle('hide');
	timeMoon.classList.toggle('hide');
	container.classList.toggle('bgBlack');
	container.classList.toggle('bgWhite');
}

//перемекати сторінку в залежності від часу
let currentTime = new Date().toLocaleTimeString();
let breakPointTime = new Date('2011-10-10T08:00:00').toLocaleTimeString()

if(currentTime>breakPointTime){
	 toggleTimeOfDay()
}

//акардіон

var infoTitle = document.querySelectorAll('.account__title');
var infoDetails = document.querySelectorAll('.info__details');

for (i = 0; i < infoTitle.length; i ++){
	infoTitle[i].addEventListener('click', showDetails);
}

function showDetails() {
	for (i = 0; i < infoDetails.length; i ++){
        if (infoDetails[i] != this.nextElementSibling && infoDetails[i].classList.contains('hide') == false) {
		infoDetails[i].classList.add('hide');
	}
}
	this.nextElementSibling.classList.toggle('hide');
}


