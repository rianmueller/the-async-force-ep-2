function requestResources() {
  const request = new XMLHttpRequest();
  request.addEventListener("load", function() {
    returnedObject = JSON.parse(this.responseText);
    console.log(
      "https://swapi.co/api/" +
        resourceType.value +
        "/" +
        resourceId.value +
        "/"
    );
    console.log(returnedObject);
    if (returnedObject.detail === "Not found") {
      let name = document.createElement("p");
      name.style.backgroundColor = "pink";
      name.innerHTML =
        "Error: Fetching resource: https://swapi.co/api/" +
        resourceType.value +
        "/" +
        resourceId.value +
        "/ NOT FOUND";
      contentContainer.appendChild(name);
    } else if (resourceType.value === "people") {
      let name = document.createElement("h2");
      name.innerHTML = returnedObject.name;
      contentContainer.appendChild(name);
      let gender = document.createElement("p");
      gender.innerHTML = returnedObject.gender;
      contentContainer.appendChild(gender);
      let species = document.createElement("p");
      let speciesRequest = new XMLHttpRequest();
      speciesRequest.addEventListener("load", function() {
        speciesObject = JSON.parse(this.responseText);
        species.innerHTML = speciesObject.name;
      });
      speciesRequest.open("GET", returnedObject.species);
      speciesRequest.send();
      contentContainer.appendChild(species);
    } else if (resourceType.value === "planets") {
      let name = document.createElement("h2");
      name.innerHTML = returnedObject.name;
      contentContainer.appendChild(name);
      let terrain = document.createElement("p");
      terrain.innerHTML = returnedObject.terrain;
      contentContainer.appendChild(terrain);
      let population = document.createElement("p");
      population.innerHTML = returnedObject.population;
      contentContainer.appendChild(population);
      let list = document.createElement("ul");
      contentContainer.appendChild(list);
      for (i = 0; i < returnedObject.films.length; i++) {
        let listItem = document.createElement("li");
        let filmRequest = new XMLHttpRequest();
        filmRequest.addEventListener("load", function() {
          filmObject = JSON.parse(this.responseText);
          listItem.innerHTML = filmObject.title;
        });
        filmRequest.open("GET", returnedObject.films[i]);
        filmRequest.send();
        list.appendChild(listItem);
      }
    } else if (resourceType.value === "starships") {
      let name = document.createElement("h2");
      name.innerHTML = returnedObject.name;
      contentContainer.appendChild(name);
      let manufacturer = document.createElement("p");
      manufacturer.innerHTML = returnedObject.manufacturer;
      contentContainer.appendChild(manufacturer);
      let starshipClass = document.createElement("p");
      starshipClass.innerHTML = returnedObject.starship_class;
      contentContainer.appendChild(starshipClass);
      let list = document.createElement("ul");
      contentContainer.appendChild(list);
      for (i = 0; i < returnedObject.films.length; i++) {
        let listItem = document.createElement("li");
        let filmRequest = new XMLHttpRequest();
        filmRequest.addEventListener("load", function() {
          filmObject = JSON.parse(this.responseText);
          listItem.innerHTML = filmObject.title;
        });
        filmRequest.open("GET", returnedObject.films[i]);
        filmRequest.send();
        list.appendChild(listItem);
      }
    }
  });
  request.open(
    "GET",
    "https://swapi.co/api/" + resourceType.value + "/" + resourceId.value + "/"
  );
  request.send();
}

requestResourceButton.addEventListener("click", requestResources);
