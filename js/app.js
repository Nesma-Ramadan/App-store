
"use strict"

var productNameInput = document.getElementById('product-name');
var productCategoryInput = document.getElementById('category');
var productPriceInput = document.getElementById('price');
var productImageInput = document.getElementById('upload-image');
var productDescriptionInput = document.getElementById('description');


var allProducts = [];

// /////////////////// Add Button //////////////////

function addNewProduct() {
    var staticImage = '3.avif';

    if (productImageInput.files['0'] != undefined) {
        staticImage = productImageInput.files['0'].name;

    }
    var productFeatures = {
        name: productNameInput.value,
        category: productCategoryInput.value,
        price: productPriceInput.value,
        image: staticImage,
        description: productDescriptionInput.value
    }
    allProducts.push(productFeatures);
    clearForm();
    displayAllProduct()

}

//  ////////////////Rest Button/////////////////

function clearForm() {
    productNameInput.value = '';
    productCategoryInput.value = '';
    productPriceInput.value = '';
    productImageInput.value = '';
    productDescriptionInput.value = '';

}


// ////////////////Display All Products///////////////

function displayAllProduct() {
    var cartoona = '';
    for (var i = 0; i < allProducts.length; i++) {
        cartoona += `
        <div class="col-3  px-3">
                    <div class="inner-card position-relative card ">
                        <img src="image/${allProducts[i].image}" class="card-img-top w-100" alt="...">
                        <div class="card-body bg-body-secondary h-25">
                            <h3 id="name">${allProducts[i].name}</h3>
                            <h5>${allProducts[i].category}</h5>
                            <p class="card-text text-truncate">${allProducts[i].description}</p>
                            <div
                                class=" d-flex  justify-content-between align-items-center position-relative bottom-0 start-0">
                                <h4 class="text-danger ">${allProducts[i].price}</h4>
                                <button onclick="dataModification(${i});" class="btn text-success">
                                    <i class="fa-solid fa-pen-to-square fs-5"></i>
                                </button>

                            </div>
                            <div
                                class="overly-layer  d-flex flex-column justify-content-center align-items-center position-absolute top-0 end-0 px-1 py-3 rounded-2">
                                <button onclick="deleteProduct(${i});" class="btn text-danger">
                                    <i class="fa-regular fa-trash-can fs-5"></i>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    document.getElementById('cards').innerHTML = cartoona;
}


// ///////////// Delete Button////////////////////////////////

function deleteProduct(inedex) {
    allProducts.splice(inedex, 1);
    displayAllProduct();

}



// ////////////////////Update Button////////////////////////////

function dataModification(i) {
    productNameInput.value=allProducts[i].name;
    productCategoryInput.value = allProducts[i].category;
    productPriceInput.value = allProducts[i].price;
    productImageInput.value = allProducts.files['0'].name;
    productDescriptionInput.value = allProducts[i].description;

}