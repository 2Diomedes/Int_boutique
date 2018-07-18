$(document).ready(function() {

  console.log(catalog);


  for (var i = 0; i < 36; i++) {

    $(".main_article").append(`<div class="col-12 col-sm-6 col-md-3 p-4 col-xl-2 products">
            <a href="page_produit.html?page_produit_id=`+[i]+`"><div class="card" id="card` + [i] + `">
            <img class="card-img-top" src="http://placehold.it/80x100" alt="Card image cap">
            <div class="card-body">
            <h4 id="product` + [i] + `">on sale</h4>
            <h5 class="card-title">${catalog[i].name}</h5>
            <p class="card-text">${catalog[i].price} €</p>
            </div>
            </div>
            </a>
            </div>
        `)

    if (catalog[i]["onSale"] == true) {
      $("#product" + i + "").text("En Solde").css("color", "blue")
    } else if (catalog[i].quantity == 0) {
      $("#product" + i + "").text("Hors Stock").css("color", "red")
      var rupture = $("<hr>")
      $("#card" + i + "").append(rupture)
      $("#card" + i + "").css("position", "relative")
      $(rupture).css("border", "2px solid red")
      $(rupture).css("transform", "rotate(-52deg)")
      $(rupture).css("position", "absolute")
      $(rupture).css("top", "26%")
      $(rupture).css("left", "-27%")
      $(rupture).css("width", "280px")


    } else if (catalog[i].quantity > 0) {
      $("#product" + i + "").text("Buy").css("color", "green")
    }
  }




});
