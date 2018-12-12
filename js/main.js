/*
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
*/
/*
function myFunction() {
    var input, filter, card, h4, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    card = document.getElementsByClassName('card-title');
    h4 = document.getElementsByTagName('h4');

    for (i = 0; i < h4.length; i++) {
        a = h4[i].getElementsByTagName("h4")[0];
        txtValue = h4.textContent || h4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            h4[i].style.display = "";
        } else {
            h4[i].style.display = "none";
        }
    }
}
*/
  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $(".card-title").filter(function() {
        $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });