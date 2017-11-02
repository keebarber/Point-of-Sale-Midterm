$(function () {

//alert("yo");

//
$(".item").on("click",  function() {
	var addtocart = $(this).html();

	$("#itemsincart").append("<div class='itemincart'>" + addtocart + "</div>");
});

var productList = [ 
{
	id: 1,
	name: "Jacket" ,	
	price: 45,
	category: "outerwear",
	size: ["medium"],
	// img: url("jacket1.jpeg")
	},
{
	id: 2,
	name: "Vest",
	price: 35,
	category: "outerwear",
	size: ["small", "large"],
	// img: url("jacket2.jpeg")
	},
{
	id: 3,
	name: "Gloves",
	price: 10,
	category: "accessories",
	size: ["medium", "large"],
	// img: url("jacket3.jpeg")
	}
];

productList.forEach(function(product) {
	updatePage(product);
});

function updatePage(item) {
	var newItem = $("<div class='item'>Item</div>");
	var pName = $("<p>" + item.name +"</p>");
	var pPrice = $("<p>" + item.price +"</p>");
	var pCat = $("<p>" + item.category +"</p>");
	// var pImg = $("<p>" + item.img +"</p>");

	// newItem.attr("class", "item");

//Adds object properties to div on page
	$(newItem).append(pName).append(pPrice).append(pCat);//.append(pImg);

//Adds all the data from the new item element to the page
	$("#content").append(newItem);
};


});