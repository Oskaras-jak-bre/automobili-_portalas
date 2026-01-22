const carForm = document.getElementById("carForm");
const carsDiv = document.getElementById("cars");
carForm.addEventListener("submit", function (event) {
  // Sustabdys standartine formos elgseną, neperkraus puslapio
  event.preventDefault();
  const name = document.getElementById("name").value;
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

  carsDiv.appendChild(carCard);
  // Atstatyk formą į pradinę padėtį
  carForm.reset;
});
