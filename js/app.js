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
    if (resourceType.value === "people") {
      let h2 = document.createElement("h2");
      h2.innerHTML = returnedObject.name;
      contentContainer.appendChild(h2);
      let pGender = document.createElement("p");
      pGender.innerHTML = returnedObject.gender;
      contentContainer.appendChild(pGender);
      let pSpecies = document.createElement("p");
      let speciesRequest = new XMLHttpRequest();
      speciesRequest.addEventListener("load", function() {
        speciesObject = JSON.parse(this.responseText);
        pSpecies.innerHTML = speciesObject.name;
      });
      speciesRequest.open("GET", returnedObject.species);
      speciesRequest.send();
      contentContainer.appendChild(pSpecies);
    }
  });
  request.open(
    "GET",
    "https://swapi.co/api/" + resourceType.value + "/" + resourceId.value + "/"
  );
  request.send();
}

requestResourceButton.addEventListener("click", requestResources);
