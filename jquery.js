
/* Part 01 */

  $(document).ready(function(){

      //$("p").hide();

      $("#button01").click(function(){
        $("#hide").hide();
        $(".hide").hide();
      });



/* Part 02 - events */

  $("#button02").click(function(){
    $("#pEvents").hide();
  });
    $("#pDoubleClick").dblclick(function(){
    $(this).hide();
  });
  $("#p1").mouseenter(function(){
   console.log("Te avisei!");
 });

//  $("#p1").mousedown(function(){
//   alert("Mouse pressed over p1!");
// });

  $("#p1").mouseup(function(){
    alert("Mouse up over p1!");
  });

  $("p").on("click", function(){
    $(this).hide();
  });

}); // End of Documents Ready
