"use strict"

window.onload = function (_event) {

    // include on change event submitter here in order to access location or park type funct?

    chooseSearchOption()
}

function chooseSearchOption() {
    const searchChoices = ["Location", "Park Type"]
    let html = " <option> Choose a Search Option </option>"
    
    for (let index = 0; index < searchChoices.length; index += 1) {
        let searchChoice = searchChoices[index]
        html += `
        <option value = "${searchChoice}">${searchChoice}</option>
        `
        // if (searchChoice === searchChoices[0]) {
    //     locationSearch()
    // }
    // else if (searchChoice === searchChoices[1]) {
    //     parkTypeSearch()
    // }

    }
    

    const searchTypeSelect = document.getElementById("searchTypeSelect")
    searchTypeSelect.innerHTML = html



    // present radio buttons that allow user to search by location or park type 
    // will contain if/else (or maybe switch) that will call either the location or park type function based on user input
}

function locationSearch() {
    console.log("location")
    // runs if user chooses location search option 
    // produces dropdown of state/territories 
    // park will match location based on the park's "State Property"
}

function parkTypeSearch() {
    console.log("park type")
    // runs if user chooses park type search option
    // produces dropdown of park types 
    // park will match description if park's "LocationName" propery CONTAINS the description
    // will need to check if nationalPark LocationName contain parkTypeData name
}