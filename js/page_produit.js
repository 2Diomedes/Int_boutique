$(document).ready(function() {

    var GET_PARAM = function(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };

    var i = GET_PARAM("page_produit_id");
    var myproduct = catalog[i];

    console.log(myproduct);

    $(".product h5").text(myproduct["name"]);
    $(".price").text("Prix : " + myproduct["price"] + "€");
    $(".quant").text("Quantité : " + myproduct["quantity"]);
    $(".product p").text(myproduct["description"] + " " + "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
    $("#ajout_panier").attr("value", "${i}")

});
