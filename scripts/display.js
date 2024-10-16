function displayCards(){
    let card="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];//getting the current
        //creating the template
        card+=` 
        <div class="pet ${pet.service}">
            <p>Name: ${pet.name}</p>
            <p> Age: ${pet.age}</p>
            <p> Gender: ${pet.gender}</p>
            <p> Service: ${pet.service}</p>
        </div>
        `;
        console.log(card); 
    }
    document.getElementById("pets").innerHTML=card;// insert the card into HTML
}

function displayTotals(){
    document.getElementById("total").innerHTML=pets.length;
}

function displayTable(){
    let row="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];//getting the current

    // instead of card use row
        row +=`<tr>
            <td>${pet.name}</p>
            <td>${pet.age}</p>
            <td>${pet.gender}</p>
            <td>${pet.service}</p>
            <td> <button class="btn btn-danger">Delete </button> </td>
        </tr>`
    // read about HTML tables
    }
    document.getElementById("petTable").innerHTML=row;
}