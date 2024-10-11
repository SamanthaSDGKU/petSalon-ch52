console.log("register.js");
let pets = [];//empty array

//create pets
let pet1 = {
    name:"Scooby",
    age:99,
    gender:"Male",
    breed:"Dane",
    service:"Grooming"
}
let pet2 = {
    name:"Scrappy",
    age:88,
    gender:"Male",
    breed:"Mixed",
    service:"Grooming"
}
let pet3 = {
    name:"Tweety",
    age:59,
    gender:"Female",
    breed:"Canarian",
    service:"Vaccines"
}

pets.push(pet1,pet2,pet3);//adding into the array

function displayNames(){
    //display pet names
    for(let i=0;i<pets.length;i++){
        document.getElementById("petNames").innerHTML+=`<p> Name: ${pets[i].name}</p>`;
    }
    console.log(pets.length);
}