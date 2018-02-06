// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );



    $(".btn").click(function(){
       $.ajax({
  url: "/api/friends"
  
})
  .done(function( data ) {
   
      console.log(data);
    
  });
    });





});