"use strict"
const searchChoices = ["Location", "Park Type","View All National Parks"]

window.onload = function (_event) {

    const searchTypeSelect = document.getElementById("searchTypeSelect")
    searchTypeSelect.onchange = handleSearchOption

    const location = document.getElementById("location")
    location.onchange = renderLocationResults

    const parkType = document.getElementById("parkType")
    parkType.onchange = renderParkTypeResults

    // const viewAll = document.getElementById("viewAllResultDiv")
    // viewAll.onchange= viewAllSearchResults

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

    if (locationOrPark === searchChoices[0]) {
        locationSearch()
    }
    else if (locationOrPark === searchChoices[1]) {
        parkTypeSearch()
    }
    else if (locationOrPark === searchChoices[2]){
        viewAllSearchResults()
    }

}

function locationSearch() {
    let html = "<option> Choose A Location </option>"

    for (let index = 0; index < locationsArray.length; index += 1) {
        const location = locationsArray[index]
        html += `
        <option value = "${location}"> ${location} </option>        
        `
    }

    let selectElement = document.getElementById("location")
    selectElement.classList.remove("d-none")
    selectElement.innerHTML = html


}

function renderLocationResults(event) {
    // park will match location based on the park's "State Property"
    const chosenLocation = event.target.value
    let html = ""
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        let nationalPark = nationalParksArray[index]
        let visitLink= ""
        if (nationalPark.Visit !== undefined) {
            visitLink = `<a href="${nationalPark.Visit}" target="_blank" style= "color:black; font-weight:bold">Visit Park Site!</a>`
        }
        if (chosenLocation === nationalPark.State) {
            html += `
            <p></p>
            <div class="container">
            <div class="card border border-black border-4">
                <div class="card-body" >
                    <h5 class=" Location-name "><span style="font-weight: bold"></span>${nationalPark.LocationName}</h5>
                    <p class="Address"><span style="font-weight: bold">Address:</span>"${nationalPark.Address}"</p>
                    <p class="City"><span style="font-weight: bold">City:</span>"${nationalPark.City}"</p>
                    <p class="State"><span style="font-weight: bold">State:</span>"${nationalPark.State}"</p>
                    <p class="Phone"><span style="font-weight: bold">Phone:</span>"${nationalPark.Phone}"</p>
                    <p class="Fax"><span style="font-weight: bold">Fax:</span>"${nationalPark.Fax}"</p>
                    ${visitLink}
                    
                </div>
            </div>
            </div>
            `
        }

    }
    let locationResultDiv = document.getElementById("locationResultDiv")
    locationResultDiv.innerHTML = html

}

function parkTypeSearch() {
    let html = "<option>Choose a Park Type </option>"

    for (let index = 0; index < parkTypesArray.length; index += 1) {
        let parkType = parkTypesArray[index]
        html += `
        <option value = "${parkType}">${parkType}</option>
        `
    }
    let selectElement = document.getElementById("parkType")
    selectElement.classList.remove("d-none")
    selectElement.innerHTML = html

}

function renderParkTypeResults(event) {
    const chosenParkType = event.target.value
    
    let html = ""

    for (let index = 0; index < nationalParksArray.length; index += 1) {
        let nationalPark = nationalParksArray[index]
        let visitLink = ""
        if (nationalPark.Visit !== undefined) {
            visitLink = `<a href="${nationalPark.Visit}" target="_blank" style= "color:black; font-weight:bold">Visit Park Site!</a>`
        }
        if (nationalPark.LocationName.includes(chosenParkType)) {
            html += `
            <p></p>
            <div class="container">
                <div class="card border border-black border-4" >
                    <div class="card-body">
                        <h5 class=" location-name "></span>${nationalPark.LocationName}</h5>
                        <p class="address"><span style="font-weight: bold">Address:</span>"${nationalPark.Address}"</p>
                        <p class="city"><span style="font-weight: bold">City:</span>"${nationalPark.City}"</p>
                        <p class="state"><span style="font-weight: bold">State:</span>"${nationalPark.State}"</p>
                        <p class="phone"><span style="font-weight: bold">Phone:</span>"${nationalPark.Phone}"</p>
                        <p class="fax"><span style="font-weight: bold">Fax:</span>"${nationalPark.Fax}"</p>
                        <div id= "visit" class ="visit">
                        ${visitLink}
                        </div>
                    
                    </div>
                </div>
            </div>
            `}
        // if (nationalPark.Visit in nationalPark === false) {
        //     const visitDiv = document.getElementById("visit")
        //     visitDiv.classList.remove("visit")
        // }

    } let parkTypeResultDiv = document.getElementById("parkTypeResultDiv")
    parkTypeResultDiv.innerHTML = html

    
}

function viewAllSearchResults(){
    
    let html = " "
    
    for (let index = 0; index < nationalParksArray.length; index += 1) {
        let nationalPark= nationalParksArray[index]
    
        let visitLink = ""
        if (nationalPark.Visit !== undefined) {
            visitLink = `<a href="${nationalPark.Visit}" target="_blank" style= "color:black; font-weight:bold">Visit Park Site!</a>`
        }

        html += `
            <br>
            <div class="container">
                <div class="card border border-black border-4">
                    <div class="card-body">
                        <h5 class=" Location-name "><span style="font-weight: bold"></span>${nationalPark.LocationName}</h5>
                        <p class="Address"><span style="font-weight: bold">Address: </span>"${nationalPark.Address}"</p>
                        <p class="City"><span style="font-weight: bold">City: </span>"${nationalPark.City}"</p>
                        <p class="State"><span style="font-weight: bold">State: </span>"${nationalPark.State}"</p>
                        <p class="Phone"><span style="font-weight: bold">Phone: </span>"${nationalPark.Phone}"</p>
                        <p class="Fax"><span style="font-weight: bold">Fax: </span>"${nationalPark.Fax}"</p>
                        ${visitLink}
                    </div>
                </div>
            </div>       
        `
    }
    
    let viewAllResultDiv = document.getElementById("viewAllResultDiv")
    // viewAllResultDiv.classList.remove("d-none")
    viewAllResultDiv.innerHTML = html
    
}


            
            
            
            
            