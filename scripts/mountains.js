"use strict"

 
console.log(mountainsArray[0].name)


window.onload = function (_event){
 const mountainSelect = document.getElementById("mountainList")
 
 
 populateMountains(mountainsArray,mountainSelect)

}


// function to allow user to choose from drop down menu 

function populateMountains(mountainsArray,selectElement){

    let html= ""
   

    for (let index= 0; index < mountainsArray.length; index +=1){
       let mountainName= mountainsArray[index].name

        console.log(mountainName)


        html += `<option value= "${mountainName}">${mountainName}</option>`

        // need to create placeholder for option value
    }

    selectElement.innerHTML = html

   


}

// function to populate mountain info based on users previous choice 

