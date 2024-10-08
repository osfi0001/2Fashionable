//const URLparams = new URL.SearchParams(window.location.search);
//https://kea-alt-del.dk/t7/api/products/1525

fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent = product.productdisplayname;
  document.querySelector(".productDisplayName").textContent = product.productdisplayname;
  document.querySelector(".modelName").textContent = product.productdisplayname;
  document.querySelector(".subCategory").textContent = product.subcategory;
  document.querySelector(".brandName").textContent = product.brandname;
  document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".productId").textContent = product.id;
  document.querySelector(".baseColour").textContent = product.basecolour;

  document.querySelector(".brandBio").textContent = product.brandbio;
  //THESE LAST DONT WANT TO WORK
  document.querySelector("#brandName").textContent = product.brandname;
}

/*
id	1525
gender	"Unisex"
category	"Accessories"
subcategory	"Bags"
articletype	"Backpacks"
basecolour	"Navy Blue"
season	"Fall"
productionyear	2010
usagetype	"Casual"
productdisplayname	"Deck Navy Blue Backpack"
parsed	1
soldout	0
relid	1525
price	1299
discount	55
variantname	"Deck Backpack"
brandname	"Puma"
brandbio	"PUMA is the World's Fastest Sports Brand"
brandimage	"http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg"
agegroup	"Adults-Unisex"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	null
sizefitdesc	null
description	"<p>asfafaf<br> kasjhdkashd</p>"
styledesc	null
*/
