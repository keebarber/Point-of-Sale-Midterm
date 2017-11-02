

// $(".item").on("click",  function() {
// 	var addtocart = $(this).html();
// 	$("#itemsincart").append("<div class='itemincart'>" + addtocart + "</div>");
	
// });







// check out

$("#popup-button").on("click", function checkOut(){
		$("#popup").css("display","flex").show(300);

});


$(".cancel").on("click", function confirm(){
	$("#popup").css("display", "none").hide(300);

});


//give the change depending on  how much cash is given

let totalPrice = 80;




$("#print").on("click", function(){
	printReceipt();
	printReceiptForCard();
});


function printReceipt(){

let cashGiven = $("#cashGiven").val();

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

