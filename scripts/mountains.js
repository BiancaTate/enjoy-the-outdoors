"use strict"



window.onload = function (_event) {
    const mountainSelect = document.getElementById("mountainList")
    mountainSelect.onchange = renderMountainInfo

    populateMountains(mountainsArray, mountainSelect)

}


// function to allow user to choose from drop down menu 

function populateMountains(mountainsArray, selectElement) {

    let html = "<option> Choose an Option </option>"


    for (let index = 0; index < mountainsArray.length; index += 1) {
        let mountainName = mountainsArray[index].name


        html += `<option value= "${mountainName}">${mountainName}</option>`

    }
    selectElement.innerHTML = html

}

// function to populate mountain info based on users previous choice 

function renderMountainInfo(event) {
    let chosenMountain = event.target.value
    let html = ""

    for (let index = 0; index < mountainsArray.length; index += 1) {
        const mountainOption = mountainsArray[index]

        if (chosenMountain === mountainOption.name) {
            console.log("hello")

            /* 
            image(how to include image in card?)
            mountain name 
            description
            elevation
             */

            html += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class=" mountain-name ">${mountainOption.name}</h5>
                    <p class="description">"${mountainOption.desc}"</p>
                    <p class="elevation">"${mountainOption.elevation}"</p>
                </div>
            </div>
              
            `
        }
    }
    const resultDiv = document.getElementById("mountainCard")
    resultDiv.innerHTML=html
}

