/* import { DOMSelectors } from "./DOM";
import { genres } from "./genre"; */

const key = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

const query = async function () {
  try {
    const response = await fetch(key);
    const data = await response.json();
    console.log(data.results[0].name);
  } catch (error) {
    console.log(error);
  }
};
query();

function pokeSearch() {
  let input, filter, UL, li, i, a, txtValue;
  input = document.getElementById("pokemonSearch");
  filter = input.value.toUpperCase();
  UL = document.getElementById("pokemon");
  li = UL.getElementsByTagName("li");
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
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
    i = i + 1;
  }
}
/* input = document.getElementById("pokemonSearch");
input.addEventListener("keypress", pokeSearch()); */
