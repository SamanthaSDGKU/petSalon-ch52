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
}

function init(){
    console.log("init");
    let pet1 = new Pet("Scooby",99,"Male","Grooming");
    //create two more pets
    let pet2 = new Pet("Scrappy",88,"Male","Vaccines");
    let pet3 = new Pet("Speedy",87,"Male","Nails");

    //push the pets on the array
    pets.push(pet1,pet2,pet3);
    // display the three pets on the console
    console.log(pets);
}

window.onload=init;//wait to render the HTML
