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
      const newButton = document.createElement("button");
      const content = document.createTextNode(element.name);
      const pokemonData = document.getElementById("pokemon");
      newDiv.appendChild(newButton);
      newButton.appendChild(content);
      newButton.setAttribute("id", "pokemon" + counter);
      newButton.setAttribute("class", "pokemonName");
      pokemonData.appendChild(newButton);
      counter++;
    });
  } catch (error) {
    console.log(error);
  }
};
query();

function pokeSearch() {
  let input, filter, pokeID, dataDiv, i, a, txtValue;
  input = document.getElementById("pokemonSearch");
  filter = input.value.toUpperCase();
  pokeID = document.getElementById("pokemon");
  dataDiv = pokeID.children;
  i = 0;

  const searchTrue = document.getElementById("search-true");
  const searchFalse = document.getElementById("search-false");
  if (filter.length > 0) {
    searchTrue.style.display = "block";
    searchFalse.style.display = "none";
    console.log("true");
  } else {
    searchTrue.style.display = "none";
    searchFalse.style.display = "block";
    console.log("false");
  }
  console.log(i);
  console.log(dataDiv.length);
  i = 0;
  while (i < dataDiv.length) {
    a = dataDiv[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      dataDiv[i].style.display = "";
      console.log("shown");
    } else {
      dataDiv[i].style.display = "none";
      console.log("not shown");
    }
    console.log(i);
    i++;
  }
}
/* input = document.getElementById("pokemonSearch");
input.addEventListener("keypress", pokeSearch()); */
DOMSelectors.searchBar.addEventListener("keyup", pokeSearch);
