"use strict"
const searchChoices = ["Location", "Park Type"]

window.onload = function (_event) {

    const searchTypeSelect = document.getElementById("searchTypeSelect")
    searchTypeSelect.onchange = handleSearchOption

    const location = document.getElementById("location")
    location.onchange = renderLocationResults

    const parkType = document.getElementById("parkType")
    parkType.onchange = renderParkTypeResults

    chooseSearchOption(searchChoices, searchTypeSelect)
    

}

function chooseSearchOption(searchChoices, selectElement) {

    let html = " <option> Choose a Search Option </option>"

    for (let index = 0; index < searchChoices.length; index += 1) {
        let searchChoice = searchChoices[index]
        html += `
        <option value = "${searchChoice}">${searchChoice}</option>
        `
    }

    selectElement.innerHTML = html

}

function handleSearchOption(event) {
    const locationOrPark = event.target.value

    if (locationOrPark === searchChoices[0]){
        locationSearch()
    }
    else if (locationOrPark === searchChoices[1]){
        parkTypeSearch()
    }

}

function locationSearch() {
    let html= "<option> Choose A Location </option>"
    
    for (let index = 0; index < locationsArray.length ; index += 1){
        const location = locationsArray[index]
        html += `
        <option value = "${location}"> ${location} </option>        
        `
    } 

    let selectElement = document.getElementById("location")
    selectElement.innerHTML = html

   
}

function renderLocationResults(event){
     // park will match location based on the park's "State Property"
    const chosenLocation = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length ; index += 1){
        let nationalPark = nationalParksArray[index]
        if (chosenLocation === nationalPark.State){
            html += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class=" Location-name ">${nationalPark.LocationName}</h5>
                    <p class="Address">"${nationalPark.Address}"</p>
                    <p class="City">"${nationalPark.City}"</p>
                    <p class="State">"${nationalPark.State}"</p>
                    <p class="Phone">"${nationalPark.Phone}"</p>
                    <p class="Fax">"${nationalPark.Fax}"</p>
                    
                </div>
            </div>
            `
        }

    }
    let locationResultDiv = document.getElementById("locationResultDiv")
    locationResultDiv.innerHTML= html

}

function parkTypeSearch() {
    console.log("park type")
    // runs if user chooses park type search option
    // produces dropdown of park types 
    // park will match description if park's "LocationName" propery CONTAINS the description
    // will need to check if nationalPark LocationName contain parkTypeData name
}

function renderParkTypeResults(event){
    console.log(event)

}