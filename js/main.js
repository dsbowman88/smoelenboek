$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card-title").filter(function() {
      $(this).parentsUntil(".row").toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});