
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
   alert("Te avisei!");
 });



}); // End of Documents Ready
