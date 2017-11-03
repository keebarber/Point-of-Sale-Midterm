$(function () {


//	Object constructor for each item on page
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


//	creates array for all products and cart and initializes them
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


//	Updates page to show all products on main page section under #content
productList.forEach(function(product) {
	updatePage(product);
});


//	Prints all objects to page by selecting object properties and creating elements on DOM
function updatePage(item) {

	var newItem = $("<div class='item'></div>");
	var pName = $("<p id='pName'>" + item.name +"</p>");
	var pPrice = $("<p id='pPrice'>" + item.price +"</p>");
	var pCat = $("<p id='pCat'>" + item.category +"</p>");
	var pDetails= $("<p id='pDetails'>" + item.details +"</p>");
	//var pImg = $("<img id ='images' src = '" + item.img + "'>");

//	Sets id of each product equal to its name
	var productID = item.name;
	$(newItem).attr("id", productID);
	console.log(productID);

//	Adds object properties to the newItem div on page
	$(newItem).append(pName).append(pPrice).append(pCat);//.append(pImg);

//	Adds the newItem div with all information to the page
	$("#content").append(newItem);
};


//	Gathers item information and creates element in same process as initial printing of products to main page
function updateCart(item) {

	var newItem = $("<div class='itemincart'></div>");
	var pName = $("<p id='pName'>" + item.name +"</p>");
	var pPrice = $("<p id='pPrice'>" + item.price +"</p>");
	var pCat = $("<p id='pCat'>" + item.category +"</p>");
	var pDetails= $("<p id='pDetails'>" + item.details +"</p>");

	$(newItem).append(pName).append(pPrice).append(pCat);//.append(pImg);

	$("#itemsincart").prepend(newItem);
};

//	When clicking on div product on main page, seeks out location of object within array and returns the object itself
$(document).on("click", ".item", function() {
	var selectedObject  = $(this).attr("id");

//	Searches through master inventory list and return object that matches the clicked items ID
	function findIndex(item) {
	for (let i = 0; i < productList.length; i++) {
		if (item == productList[i].name) {
			return productList[i];
		}
	}
		return false;
};

//	Associates the returned object with a new variable for further referencing
 	let productToCart = findIndex(selectedObject);
	shoppingCart.push(productToCart);

//	DEBUGGING USE. DISPLAYS INDIVIDUAL ITEM JUST ADDED AS WELL AS FULL CART CONTENT
 	// console.log(shoppingCart);
 	// console.log(productToCart.name);

//	Updates the new product to the shopping cart and updates the total price
	updateCart(productToCart);
 	calcPrice();
});


//	Calculates the price of the items in the cart
function calcPrice () {
	let subTotal = 0;

//	Adds price of each item in cart for SUBTOTAL
	for (var i = shoppingCart.length - 1; i >= 0; i--) {
		subTotal += shoppingCart[i].price;
	}

//	Calculates tax and total price
	let taxAmount = subTotal * .06;
	let totalPrice = taxAmount + subTotal;

parseFloat(Math.round(subTotal * 100) / 100).toFixed(2);
parseFloat(Math.round(taxAmount * 100) / 100).toFixed(2);
parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);


//	Prints out the total price to the button and top of modal
	$("#totalPrice").text("Subtotal:  $" + subTotal + " + Tax:  $" + taxAmount.toFixed(2) + " = Total Price: $" +totalPrice);
	$("#btn-checkout").text("Checkout: $" + totalPrice.toFixed(2));
	return totalPrice;
};

//	When clicking checkout button, shows final payment page
$("#btn-checkout").on("click", function checkOut(){
		$("#popup").css("display","flex").show(300);
});

//	On cancel, closes form and clears input fields
$(".cancel").on("click", function confirm(){
	$("#popup").css("display", "none").hide(300);
	$("#cashGiven").val("");
	$("#cardGiven").val("");
});

//	When clicking PRINT RECEIPT button, displays change to be delivered and shows receipt for order below
$("#print").on("click", function(){
	printReceipt();
});

//	PRINT RECEIPT function
function printReceipt(){

let cashGiven = $("#cashGiven").val();
let totalPrice = calcPrice();
parseFloat(Math.round(totalPrice * 100) / 100).toFixed(2);


if (cashGiven !== "") {
	let amountOfChange = cashGiven - totalPrice;
	parseFloat(Math.round(amountOfChange * 100) / 100).toFixed(2);

//	If payment is by cash, enter amount tendered
	if(cashGiven >totalPrice){
	$("#amountOfChange").text("Change: $" + amountOfChange.toFixed(2));

//	Prints receipt when payment is processed
		for (var i = shoppingCart.length - 1; i >= 0; i--) {
			$("#print").after("<p>"+shoppingCart[i].name+ "   - - -   $"+shoppingCart[i].price+"</p>");
		}

	} else {
		alert("Please ask for more cash than the total price.");
		$("#cashGiven").val("");
	}

} else {

	//	If card information is entered
		let cardGiven = $("#cardGiven").val();
		if (cardGiven !== "") {
			let totalPrice = 0;
			$("#amountOfChange").text("Payment received!");

	//	Prints receipt when payment is processed
			for (var i = shoppingCart.length - 1; i >= 0; i--) {
				$("#print").after("<p>"+shoppingCart[i].name+ "   - - -    $"+shoppingCart[i].price+"</p>");
			}
		
		} else {
			alert("only enter cash or credit");	
		}
	}

}

//	Atttempting to get size selectors to work

// $("#small").on("click", function() {
// 	let catArray = [];
// 	let sizeMatch = false;

// 	for (var i = productList.length - 1; i >= 0; i--) {
		
// 		catArray = productList[i].size;
// 		sizeMatch = false;

// 		for( var j = catArray.length - 1; j>=0; j--) {
// 			if(catArray[j] === 'small') {
// 				sizeMatch = true;
// 			} 
// 		}
// 		if (sizeMatch =false) {
// 			productList[i].css("color", "red");
// 		}
// 		console.log(productList[i]);
// 	updatePage(productList[i]);
// 	}
// });

//End of functionj
});