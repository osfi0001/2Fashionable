fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then(showProducts);

function showProducts(products) {
  //Looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //Fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);

  if (product.soldout) {
    //product er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    //product er udsolgt
    copy.querySelector("article").classList.add("onSale");
    copy.querySelector(".discounted p span").textContent = Math.round(product.price - (product.price * product.discount) / 100);
    copy.querySelector(".discounted p+p span").textContent = product.discount;
  }

  //ændre indhold
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".brandName").textContent = product.brandname;
  copy.querySelector(".subCategory").textContent = product.subcategory;
  copy.querySelector(".price span").textContent = product.price;
  copy.querySelector(".category").textContent = product.category;
  //appende
  document.querySelector("main").appendChild(copy);
}

/**
  <article class="smallProduct">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
          <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
          <p class="subtle">Tshirts | Nike</p>
          <p class="price"><span>Prev.</span> DKK 1595,-</p>
          <div class="discounted">
            <p>Now DKK 1560,-</p>
            <p>-34%</p>
          </div>
          <a href="product.html">Read More</a>
        </article>
 */
/**
id	1163
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
season	"Summer"
productionyear	2011
usagetype	"Sports"
productdisplayname	"Sahara Team India Fanwear Round Neck Jersey"
price	895
discount	null
brandname	"Nike"
soldout	0 
*/
