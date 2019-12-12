$(document).ready(function(){

$("#subBtn").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    let nBurger = $("#bur").val();
    console.log(nBurger);
      $.ajax({
        method: "POST",
        url: "/burgers", 
        data: {name:nBurger}
      }).then(function(data) {
        // reload page to display devoured burger in proper column
        console.log("hi");
        location.reload();
      });
  });

$(".btn").on("click", function(event) {
  event.preventDefault();

  let id = this.parentNode[0].value;
  
  $.ajax({
    method: "PUT",
    url: "/burgers/" + id
  }).then(function(data){
    location.reload();
  })



})













})




