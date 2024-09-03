const categorylist = document.querySelector(".categorylist");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categorylist.innerHTML += `<li><a href= "category.html?category=${category.category}">${category.category}<a/><li/>`;
    });
  });

if (params.has("category")) {
  console.log("category is defined");
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}
