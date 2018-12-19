$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".card-title").filter(function() {
      $(this).parentsUntil(".row").toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function sortByName(){
  list = document.getElementsByClassName("card-title"); // get all card-titles
  cardcol = document.getElementsByClassName("col-md-4"); // get columns for sorting
  switchcount = 0;
  switching = true;
  dir = "asc";
  while (switching){
    switching = false
    for (i = 0; i < (list.length - 1); i++) {
      shouldSwitch = false;
      if (dir == "asc") {
      if (list[i].innerText.toLowerCase() > list[i + 1].innerText.toLowerCase()){
        shouldSwitch = true;
        break;
      }
    }
    else if (dir == "desc"){
      if (list[i].innerText.toLowerCase() < list[i + 1].innerText.toLowerCase()){
        shouldSwitch = true;
        break;
      }
    }
  }
    if (shouldSwitch){
      cardcol[i].parentNode.insertBefore(cardcol[i + 1], cardcol[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc"){
        dir = "desc";
        switching = true;
    }
  }
}
}

function newName(){
  $(".row").append('<div class="col-md-4"><div class="card"><img src="https://www.codegorilla.nl/wp-content/uploads/2017/10/Tekengebied-2-288x300.png" alt="" class="card-image-top"><div class="card-body"><h4 class="card-title">' + $("#newName").val() + '</h4><p class="card-text">' + $("#subtext").val() +'</p></div></img></div></div>');
}