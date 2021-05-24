import { DOMSelectors } from "./DOM";
//import { genres } from "./genre"; */

const key = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

const query = async function () {
  try {
    let counter = 0;
    const response = await fetch(key);
    const data = await response.json();
    data.results.forEach(function makeElement(element) {
      const newDiv = document.createElement("div");
      const space = document.createElement("div");
      const newButton = document.createElement("button");
      const content = document.createTextNode(element.name);
      const pokemonData = document.getElementById("pokemon");
      newDiv.appendChild(newButton);
      newButton.appendChild(content);
      newDiv.appendChild(space);
      space.setAttribute("class", "pokeSpacing");
      newButton.setAttribute("id", "pokemon" + counter);
      newButton.setAttribute("class", "pokemonButton");
      pokemonData.appendChild(newDiv);
      counter++;
    });
  } catch (error) {
    alert("hey something went wrong");
    console.log(error);
  }
};
query();

function pokeSearch() {
  let input, filter, pokeID, dataDiv, i, a, txtValue, error, counterTwo;
  input = document.getElementById("pokemonSearch");
  filter = input.value.toUpperCase();
  pokeID = document.getElementById("pokemon");
  dataDiv = pokeID.children;
  error = document.getElementById("errorMessage");
  i = 0;

  const searchTrue = document.getElementById("search-true");
  const searchFalse = document.getElementById("search-false");
  if (filter.length > 0) {
    searchTrue.style.display = "block";
    searchFalse.style.display = "none";
  } else {
    searchTrue.style.display = "none";
    searchFalse.style.display = "block";
  }
  i = 0;
  counterTwo = 0;
  while (i < dataDiv.length) {
    a = dataDiv[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      dataDiv[i].style.display = "";
      counterTwo++;
    } else {
      dataDiv[i].style.display = "none";
    }
    i++;
  }
  if (counterTwo <= 0 && filter.length >= 1) {
    error.style.display = "";
    console.log("please spell better");
  } else {
    error.style.display = "none";
  }
}
DOMSelectors.searchBar.addEventListener("keyup", pokeSearch);
