let pets = [];//empty array


function Pet(name,age,gender,service){
    //properties = parameter (value)
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function register(){
    let inputName= document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender =document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;

    //create the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputService);
    console.log(newPet);
    pets.push(newPet);
    displayTotals();
    //displayCards(); //
    displayTable()
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
