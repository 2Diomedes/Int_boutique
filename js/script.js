$(document).ready(function() {



    for (var i = 0; i < 18 ; i++) {

        $(".main_article").append(`<div class="col-12 col-sm-6 col-md-3 p-4 col-xl-2 products">
            <div class="card">
            <img class="card-img-top" src="http://placehold.it/80x100" alt="Card image cap">
            <div class="card-body">
            <h4>on sale</h4>
            <h5 class="card-title">${catalog[i].name}</h5>
            <p class="card-text">${catalog[i].price} €</p>
            </div>
            </div>
            </div>
        `)
    }



});
