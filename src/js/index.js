/* import { DOMSelectors } from "./DOM";
import { genres } from "./genre"; */

const key = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

const query = async function () {
  try {
    const response = await fetch(key);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
query();

function pokeSearch() {
  var input, filter, UL, li, i, a, txtValue;
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
