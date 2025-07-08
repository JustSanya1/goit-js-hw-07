const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.childElementCount}`);
for (const item of categoriesList.children) {
    console.log(`Category: ${item.children[0].textContent}`);
    console.dir(`Elements: ${item.children[1].childElementCount}`);
};