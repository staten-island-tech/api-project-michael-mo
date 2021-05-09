import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "http://pokeapi.co/api/v1/pokemon/";

searchNone = document.getElementById("search-none");
searchTrue = document.getElementById("search-true");

function pokeSearch() {
  var input, filter, pokeUL, li, a, i, txtValue;
  input = document.getElementById("poke-search");
  filter = input.value.toUpperCase();
  pokeUL = document.getElementById("pokemon");
  li = pokeUL.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
