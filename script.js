const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");
const istrintiprice = document.getElementById("istrinti-price");
carForm.addEventListener("submit", function (event) {
  // Sustabdys standartine formos elgseną, neperkraus puslapio
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const fuel = document.getElementById("fuel").value;
  const year = document.getElementById("year").value;

  const carCard = document.createElement("div");
  carCard.className = "car-card";
  carCard.innerHTML = `
  <img src=${image} alt="car">
  <h3>${name}</h3>
  <p>${description}</p>
   <p>Automobilio metai: ${year}</p>
  <p>Automobilio kaina: ${price}</p>
  <p>Automobilio kuras: ${fuel}</p>`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Ištrinti";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    carCard.remove();
  });
  if (name.length < 3) {
    alert("Per trumpas automobilio pavadinimas");
    return;
  }
  if (price <= 0) {
    alert("Per maža kaina");
    return;
  }
  carCard.appendChild(deleteBtn);
  carsDiv.appendChild(carCard);

  // Atstatyk formą į pradinę padėtį
  carForm.reset;
});
