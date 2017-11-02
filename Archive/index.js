$(function () {

alert("yo");

$(".item").on("click",  function() {
	var addtocart = $(this).html();

	$("#itemsincart").append("<div class='itemincart'>" + addtocart + "</div>");
});



});