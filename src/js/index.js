import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

const key = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
console.log(key);

function pokeSearch() {
  var input, filter, pokeUL, li, a, i, txtValue;
  input = document.getElementById("pokemonSearch");
  filter = input.value.toUpperCase();
  UL = document.getElementById("pokemon");
  li = UL.getElementsByTagName("li");

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
