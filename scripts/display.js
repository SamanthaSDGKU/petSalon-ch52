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
    // .. 
    //..
    //..

    // instead of card use row
    //row +=`<tr></tr>`
    // read about HTML tables
    
}