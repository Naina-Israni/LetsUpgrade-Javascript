let array = [
  {
    name: "Alice",
    age: 23,
    country: "India",
    hobbies: ["Cooking", "Painting", "Coding"],
  },
  {
    name: "Mark",
    age: 33,
    country: "America",
    hobbies: ["Playing Guitar", "Cricket", "Coding"],
  },
  {
    name: "Martin",
    age: 30,
    country: "Korea",
    hobbies: ["Scoccer", "Hacking", "Riding"],
  },
  {
    name: "Julia",
    age: 25,
    country: "Russia",
    hobbies: ["Dancing", "Gardening", "Riding"],
  },
];

function ageObjectCond() {
    let age;
    for (let i = 0; i < array.length; i++) {
    let element = array[i];
     age = element.age;
     if(age<30){
     console.log(element);
    }
  }
}
 
function countryObjectCond()
{
    let country;
    for (let i = 0; i < array.length; i++) {
    let element = array[i];
     country = element.country;
     if(country=="India"){
     console.log(element);
    }
  }
}

ageObjectCond();

countryObjectCond();
