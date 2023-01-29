const form = document.querySelector("form");
const recipeList = document.getElementById("recipe-list");

form.addEventListener("submit", addRecipe);

function addRecipe(e) {
  e.preventDefault();

  const recipeName = document.getElementById("recipe-name").value;
  const ingredients = document.getElementById("ingredients").value;
  const instructions = document.getElementById("instructions").value;

  if (recipeName === "" || ingredients === "" || instructions === "") {
    return;
  }

  const recipeCard = document.createElement("div");
  recipeCard.classList.add("card");
  recipeCard.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${recipeName}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Ingredients</h6>
      <p class="card-text">${ingredients}</p>
      <h6 class="card-subtitle mb-2 text-muted">Instructions</h6>
      <p class="card-text">${instructions}</p>
    </div>
  `;

  recipeList.appendChild(recipeCard);

  form.reset();
}
