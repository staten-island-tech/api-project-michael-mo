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
      const divinsidediv = document.createElement("div");
      const pokemonData = document.getElementById("pokemon");
      newDiv.appendChild(newButton);
      divinsidediv.appendChild(content);
      newButton.appendChild(divinsidediv);
      newDiv.appendChild(space);
      space.setAttribute("class", "pokeSpacing");
      newDiv.setAttribute("id", "pokemonDiv" + counter);
      newButton.setAttribute("id", "pokemon" + counter);
      newButton.setAttribute("class", "pokemonButton");
      divinsidediv.setAttribute("id", "divinsidediv" + counter);
      pokemonData.appendChild(newDiv);
      const queryTwo = async function () {
        try {
          const idkey = element.url;
          const idresponse = await fetch(idkey);
          const iddata = await idresponse.json();
          iddata.types.forEach(function pickType(elementTwo) {
            const typeDiv = document.createElement("div");
            const typecontent = document.createTextNode(elementTwo.type.name);
            typeDiv.setAttribute("class", "typeclass" + counter);
            typeDiv.appendChild(typecontent);
            newButton.appendChild(typeDiv);
          });
        } catch (error) {
          console.log(error);
        }
      };
      queryTwo();
      counter++;
    });
  } catch (error) {
    alert("hey something went wrong");
    console.log(error);
  }
};
query();

function pokeSearch() {
  let input,
    filter,
    pokeID,
    dataDiv,
    i,
    a,
    txtValue,
    error,
    counterTwo,
    pokeDiv;
  input = document.getElementById("pokemonSearch");
  filter = input.value.toUpperCase();
  dataDiv = document.getElementById("pokemon");
  pokeID = dataDiv.children;
  console.log(dataDiv);
  error = document.getElementById("errorMessage");

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
  while (i < pokeID.length) {
    pokeDiv = document.getElementById("pokemonDiv" + i);
    a = document.getElementById("divinsidediv" + i);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      pokeDiv.style.display = "";
      counterTwo++;
    } else {
      pokeDiv.style.display = "none";
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
