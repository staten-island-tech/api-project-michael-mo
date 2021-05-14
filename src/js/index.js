/* import { DOMSelectors } from "./DOM";
import { genres } from "./genre"; */

const key = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
counter = 0;

const query = async function () {
  try {
    const response = await fetch(key);
    const data = await response.json();
    data.results.forEach(function makeElement(element) {
      const newButton = document.createElement("button");
      const content = document.createTextNode(element.name);
      const pokemonData = document.getElementById("pokemon");
      const existingDiv = document.getElementById("pokemon" + counter);
      newButton.appendChild(content);
      newButton.setAttribute("id", "pokemon" + counter);
      newButton.setAttribute("class", "pokemonName");
      document.body.insertBefore(newButton, existingDiv);
      document.body.insertBefore(pokemonData, newButton);
      counter++;
    });
  } catch (error) {
    console.log(error);
  }
};
query();

function pokeSearch() {
  let input, filter, UL, li, i, a, txtValue;
  input = document.getElementById("pokemonSearch");
  filter = input.value.toUpperCase();
  pokeDataTwo = document.getElementById("pokemon");
  dataDiv = pokeDataTwo.getElementsByTagName("div");
  i = 0;

  searchTrue = document.getElementById("search-true");
  searchFalse = document.getElementById("search-false");
  if (filter.length > 0) {
    searchTrue.style.display = "block";
    searchFalse.style.display = "none";
    console.log("true");
  } else {
    searchTrue.style.display = "none";
    searchFalse.style.display = "block";
    console.log("false");
  }

  while (i < li.length) {
    a = dataDiv[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      dataDiv[i].style.display = "";
    } else {
      dataDiv[i].style.display = "none";
    }
    i = i + 1;
  }
}
/* input = document.getElementById("pokemonSearch");
input.addEventListener("keypress", pokeSearch()); */
