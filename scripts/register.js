let pets = [];//empty array
let inputName= document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender =document.getElementById("txtGender");
let inputService = document.getElementById("txtService");

function Pet(name,age,gender,service){
    //properties = parameter (value)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function isValid(pet){
    let validation =true;
    if(pet.name==""){
        validation = false;
        inputName.classList.add("error");
       
    }
    if(pet.servic==""){
        validation=false;
        inputService.classList.add("error");
    }
    return validation;
}

function register(){
    //create the obj
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputService.value);
    console.log(newPet);
    if(isValid(newPet)==true){
        pets.push(newPet);
        displayTotals();
        //displayCards(); //
        displayTable()
    }
}

function deletePet(petId){
    console.log("Deleting pet ... " + petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);
    displayTable();
    displayTotals();
}

function init(){
    console.log("init");
    let pet1 = new Pet("Scooby",99,"Male","grooming");
    //create two more pets
    let pet2 = new Pet("Scrappy",88,"Male","vaccines");
    let pet3 = new Pet("Speedy",87,"Male","nails");

    //push the pets on the array
    pets.push(pet1,pet2,pet3);
    // display the three pets on the console
    console.log(pets);
    displayTotals();
    //displayCards();
    displayTable();
}

window.onload=init;//wait to render the HTML
