 
const totalCategories = document.querySelectorAll(".item");
console.log(` ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `category: ${categories.children[0].textContent}
elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);