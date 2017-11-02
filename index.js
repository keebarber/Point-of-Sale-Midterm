$(function () {


//	Object constructor for each item on pgae
function newProduct(name, price, category, size, description) {
	let product ={};

	product.name = name;
	product.price = price;
	product.category = category;
	product.size = size;
	product.description = description;
	//product.img = img;

	return product;
};


//	creates array for all products and initializes them
let productList = [];
let shoppingCart = [];

let item1 = newProduct("Hat", 12, "accessories", ["medium"], "This is a hat description"/*, "../images/jacket1.jpeg"*/);
let item2 = newProduct("Gloves", 5, "accessories", ["small", "medium", "large"], "This is a hat description");
let item3 = newProduct("Vest", 89, "outerwear", ["medium", "large"], "This is a hat description");
let item4 = newProduct("Pants", 45, "pants", ["large"], "This is a hat description");
let item5 = newProduct("Vest2", 56, "outerwear", ["small", "large"], "This is a hat description");
let item6 = newProduct("Hat2", 20, "accessories", ["small"], "This is a hat description");
let item7 = newProduct("Hat3", 27, "accessories", ["small"], "This is a hat description");
let item8 = newProduct("Jacket2", 6, "outerwear", ["small", "medium", "large"], "This is a hat description");
let item9 = newProduct("Jacket", 18, "accessories", ["large"], "This is a hat description");
let item10 = newProduct("Pants2", 34, "pants", ["medium"], "This is a hat description");
let item11 = newProduct("Vest3", 15, "outerwear", ["small", "medium"], "This is a hat description");
let item12 = newProduct("Hat", 9, "accessories", ["medium"], "This is a hat description");
productList.push(item1);
productList.push(item2);
productList.push(item3);
productList.push(item4);
productList.push(item5);
productList.push(item6);
productList.push(item7);
productList.push(item8);
productList.push(item9);
productList.push(item10);
productList.push(item11);
productList.push(item12);


//Prints all products to page
productList.forEach(function(product) {
	updatePage(product);
});


//Prints all objects to page
function updatePage(item) {

	var newItem = $("<div class='item'>Item</div>");
	var pName = $("<p id='pName'>" + item.name +"</p>");
	var pPrice = $("<p id='pPrice'>" + item.price +"</p>");
	var pCat = $("<p id='pCat'>" + item.category +"</p>");
	var pDetails= $("<p id='pDetails'>" + item.details +"</p>");
	//var pImg = $("<img id ='images' src = '" + item.img + "'>");

	var productID = item.name;
	$(newItem).attr("id", productID);
	console.log(productID);

//Adds object properties to div on page
	$(newItem).append(pName).append(pPrice).append(pCat);//.append(pImg);

//Adds all the data from the new item element to the page
	$("#content").append(newItem);
};

function updateCart(item) {

	var newItem = $("<div class='itemincart'>Item</div>");
	var pName = $("<p id='pName'>" + item.name +"</p>");
	var pPrice = $("<p id='pPrice'>" + item.price +"</p>");
	var pCat = $("<p id='pCat'>" + item.category +"</p>");
	var pDetails= $("<p id='pDetails'>" + item.details +"</p>");

	//Adds object properties to div on page
	$(newItem).append(pName).append(pPrice).append(pCat);//.append(pImg);

//Adds all the data from the new item element to the page
	$("#itemsincart").prepend(newItem);
};


$(document).on("click", ".item", function() {
// debugger;
	var selectedObject  = $(this).attr("id");
		// console.log(selectedObject);
	function findIndex(item) {
	for (let i = 0; i < productList.length; i++) {
		if (item == productList[i].name) {
			return productList[i];
		}
	}
		return false;
};


//Associates index of selected item with main array as a variable
 	let productToCart = findIndex(selectedObject);
	shoppingCart.push(productToCart);

 	console.log(shoppingCart);
 	console.log(productToCart.name);

 		updateCart(productToCart);

 	calcPrice();

});

function calcPrice () {
	let subTotal = 0;

	for (var i = shoppingCart.length - 1; i >= 0; i--) {

		subTotal += shoppingCart[i].price;
		// return subTotal;
	}

	let taxAmount = subTotal * .06;
	let totalPrice = taxAmount + subTotal;

	$("#totalPrice").text(totalPrice);
	$("#btn-checkout").text("Checkout: $" + totalPrice);
	return totalPrice;

console.log(taxAmount);
console.log(subTotal);
console.log(totalPrice);
};



//check out

$("#btn-checkout").on("click", function checkOut(){
		$("#popup").css("display","flex").show(300);

});


$(".cancel").on("click", function confirm(){
	$("#popup").css("display", "none").hide(300);

});


//give the change depending on  how much cash is given

// let totalPrice = calcPrice();




$("#print").on("click", function(){
	printReceipt();
	printReceiptForCard();
});


function printReceipt(){

let cashGiven = $("#cashGiven").val();
let totalPrice = calcPrice();

if (cashGiven !== "") {
	let amountOfChange = cashGiven - totalPrice;
	$("#amountOfChange").text("Change: $" + amountOfChange);

} else {

	let cardGiven = $("#cardGiven").val();
	
	if (cardGiven !== "") {
		let totalPrice = 0;
		$("#amountOfChange").text("Payment received!");
	
	} else {
	
		alert("only enter cash or credit");	
	}
}

}

//End of functionj
});



// $(function () {

// //alert("yo");
// var currentTotal = 0;
// //	Assigns click handler to all item class elements  on page and moves data to sidebar/cart
// $(document).on("click", ".item", function(event) {

// debugger;
// 	let addName = $("p:first", this).text();
// 	// $("pPrice")
// 	let addPrice =  $("#pPrice", this).val();

// 	addToCart(addName, addPrice);

// 	currentTotal = $("#sidebartotal").val();
// 	updateSubTotal(currentTotal, addPrice);
// });



// function updateSubTotal(totalPrice, newPrice) {

// 	let a = totalPrice;
// 	let b = newPrice;

// 	let newTotal = a+b;

// 	$("#sidebartotal").val(newTotal);
// };

// //Going to use the already stripped name and price of the new item to add it to the cart
// function addToCart(name, price) {
		

// 	$("#itemsincart").append("<div class='itemincart'> " + name + price+ "</div>");	
// };





// //	Object constructor for each item on pgae
// function newProduct(name, price, category, size, description) {
// 	let product ={};

// 	product.name = name;
// 	product.price = price;
// 	product.category = category;
// 	product.size = size;
// 	product.description = description;

// 	return product;
// };


// //	creates array for all products and initializes them
// let productList = [];
// let item1 = newProduct("Hat", 12, "accessories", ["medium"], "This is a hat description");
// let item2 = newProduct("Gloves", 12, "accessories", ["small", "medium", "large"], "This is a hat description");
// let item3 = newProduct("Vest", 12, "outerwear", ["medium", "large"], "This is a hat description");
// let item4 = newProduct("Pants", 12, "pants", ["large"], "This is a hat description");
// let item5 = newProduct("Vest2", 12, "outerwear", ["small", "large"], "This is a hat description");
// let item6 = newProduct("Hat2", 12, "accessories", ["small"], "This is a hat description");
// let item7 = newProduct("Hat3", 12, "accessories", ["small"], "This is a hat description");
// let item8 = newProduct("Jacket2", 12, "outerwear", ["small", "medium", "large"], "This is a hat description");
// let item9 = newProduct("Jacket", 12, "accessories", ["large"], "This is a hat description");
// let item10 = newProduct("Pants2", 12, "pants", ["medium"], "This is a hat description");
// let item11 = newProduct("Vest3", 12, "outerwear", ["small", "medium"], "This is a hat description");
// let item12 = newProduct("Hat", 12, "accessories", ["medium"], "This is a hat description");
// productList.push(item1);
// productList.push(item2);
// productList.push(item3);
// productList.push(item4);
// productList.push(item5);
// productList.push(item6);
// productList.push(item7);
// productList.push(item8);
// productList.push(item9);
// productList.push(item10);
// productList.push(item11);
// productList.push(item12);


// //Prints all products to page
// productList.forEach(function(product) {
// 	updatePage(product);
// });


// //	Function that updates the cart
// function updatePage(item) {
// 	var newItem = $("<div class='item'>Item</div>");
// 	var pName = $("<p id='pName'>" + item.name +"</p>");
// 	var pPrice = $("<p id='pPrice'>" + item.price +"</p>");
// 	var pCat = $("<p id='pCat'>" + item.category +"</p>");
// 	var pDetails= $("<p id='pDetails'>" + item.details +"</p>");

// 	// var pImg = $("<p>" + item.img +"</p>");

// 	// newItem.attr("class", "item");

// //Adds object properties to div on page
// 	$(newItem).append(pName).append(pPrice).append(pCat);//.append(pImg);

// //Adds all the data from the new item element to the page
// 	$("#content").append(newItem);
// };