const total = document.querySelector(".purchase__total-price");
let order = document.querySelectorAll(".cart-item__price_default");
const button = document.querySelector(".button");
let itemsCount = document.querySelector(".shopping-cart__count");
itemsCount.innerHTML = order.length + " items";
let discountCounter = 0;
const discountMessage = document.createElement("div");
let result = 0;
for (let i = 0; i < order.length; i++) {
	let price = +order[i].textContent.slice(1);
	result += price;
}
total.innerHTML = "$" + result;

button.addEventListener("click", function () {
	if (discountCounter == 1) {
		discountMessage.innerHTML = "You have already used the discount";
	}
	if (discountCounter == 0) {
		let result = 0;
		for (let i = 0; i < order.length; i++) {
			let price = +order[i].textContent.slice(1);
			let priceDiscount = price * (1 - 0.2);
			let discountDiv = document.createElement("div");
			discountDiv.className = "cart-item__price_discount";
			discountDiv.innerHTML = "$" + priceDiscount;
			order[i].after(discountDiv);
			order[i].classList.add("cart-item__price_irrelevant");
			result += priceDiscount;
		}
		discountMessage.className = "purchase__discount-message";
		discountMessage.innerHTML = "Discount successfully used";
		button.after(discountMessage);
		total.innerHTML = "$" + result;
		discountCounter = 1;
	}
});

function discountError() {
	discountMessage.style.fontWeight = "700";
	discountMessage.style.color = "red";
}
