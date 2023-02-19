const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then((allCharacters) => {
      const parentDiv = document.querySelector(".characters-container");
      const hiddenDivOnFetch = document.getElementById("character-info-to-hide")

      allCharacters.forEach((character) => {
        let oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";

        let newDivName = document.createElement("div");
        newDivName.classList.add = ('name');
        newDivName.innerHTML = `Name: ${character.name}`;
        oneCharacter.appendChild(newDivName);

        let newDivOccupation = document.createElement("div");
        newDivOccupation.classList.add = ('occupation');
        newDivOccupation.innerHTML = `Occupation: ${character.occupation}`;
        oneCharacter.appendChild(newDivOccupation);

        let newDivCar = document.createElement("div");
        newDivCar.classList.add = ('cartoon');
        newDivCar.innerHTML = `Cartoon: ${character.cartoon}`;
        oneCharacter.appendChild(newDivCar);
        parentDiv.appendChild(oneCharacter)

        let newDivWeapon = document.createElement("div");
        newDivWeapon.classList.add = ('weapon');
        newDivWeapon.innerHTML = `Weapon: ${character.weapon}`;
        oneCharacter.appendChild(newDivWeapon);
        parentDiv.appendChild(oneCharacter)

        hiddenDivOnFetch.style.display = "none" 
        
      }) 
    }); 
  });
});

document.getElementById('fetch-one').addEventListener('click', function (event) {
  let idnumber = document.getElementsByName("character-id")
  charactersAPI.getOneRegister(idnumber[0].value).then((allCharacters) => {
    const parentDiv = document.querySelector(".characters-container");
    const hiddenDivOnFetch = document.getElementById(
      "character-info-to-hide"
    );
    let oneCharacter = document.createElement("div");
    oneCharacter.className = "character-info";
    let newDivName = document.createElement("div");

    newDivName.classList.add("name");
    newDivName.innerHTML = `Name: ${allCharacters.name}`;
    oneCharacter.appendChild(newDivName);
    parentDiv.appendChild(oneCharacter);

    //Mostrar el resto de propiedades
    let newDivOccupation = document.createElement("div");
    newDivOccupation.classList.add("occupation");
    newDivOccupation.innerHTML = `Occupation: ${allCharacters.occupation}`;
    oneCharacter.appendChild(newDivOccupation);
    parentDiv.appendChild(oneCharacter);

    let newDivCartoon = document.createElement("div");
    newDivCartoon.classList.add("cartoon");
    newDivCartoon.innerHTML = `Cartoon: ${allCharacters.cartoon}`;
    oneCharacter.appendChild(newDivCartoon);
    parentDiv.appendChild(oneCharacter);

    let newDivWeapon = document.createElement("div");
    newDivWeapon.classList.add("weapon");
    newDivWeapon.innerHTML = `Weapon: ${allCharacters.weapon}`;
    oneCharacter.appendChild(newDivWeapon);
    parentDiv.appendChild(oneCharacter);
    hiddenDivOnFetch.style.display = "none"
  });
 
})

document.getElementById('delete-one').addEventListener('click', function (event) {
 let idnumber = document.getElementsByName("character-id-delete")
  charactersAPI.deleteOneRegister(idnumber[0].value)
  .then(() => document.getElementById('delete-one').style.backgroundColor= "green")
  .catch((err)=> document.getElementById('delete-one').style.backgroundColor= "reed")
})

document.getElementById('edit-character-form').addEventListener('submit', function (event) {
     

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {
  document.getElementById("new-character-form").addEventListener("submit", function (event) {
    event.preventDefault();
 
  });
});

