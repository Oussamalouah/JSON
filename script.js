
let id = document.getElementById('id')
let Désig = document.getElementById('des')
let price = document.getElementById('price')
let	Catégo = document.getElementById('Catégorie')
let Dispo = document.getElementById('dispo')
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready( function () {
     $.getJSON("file.json", function(product) {
    console.log(product);
    for(var i =0; i<=10;i++){
document.getElementById('tbody').innerHTML+=`
<tr>
  <td>${product[i].Id}</td>
  <td>${product[i].Désignation}</td>
  <td>${product[i].prix}</td>
  <td>${product[i].catégorie}</td>
  <td>${product[i].disponibilité}</td>


  </tr>
`
    }
   
     
    
    
});
});

