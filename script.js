// Exercice 1

let myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];
  
  console.log(myAlphabet.length);
  let planets = ["Bujumbura","Kigali","Kampala","Bruxelles","Berlin"];

  planets.forEach((planet) => {

    console.log(planet);
  }
  
  );

let someDataTypes=["prénom",33,true,["arthur"]];

  
//   console.log(typeof(someDataTypes[0]));

someDataTypes.forEach((planet) => {

    console.log(typeof(planet));
  }
  
  );
  for (let i = 0 ;i<someDataTypes.length; i++)
{

    console.log(i);
}
  
let foods =[];
console.log(foods);
 
foods.push("riz");

// console.log(foods);
foods.forEach((food)=> {


  console.log(food);
}

);

foods.push(4,true,undefined);
foods.forEach((food)=> {


  console.log(food);
}

);
let africanFood =[];
africanFood = foods.slice();
africanFood.forEach((food)=> {

  
  console.log(food);
})
;

// exercice 5


let countries = ["Burundi","Rwanda","Congo","Tanzanie","ouganda","kenya"];

countries.forEach((country) => {

  let displayTable= country.split("");

  // console.log(country.split(""));

  displayTable.forEach((distable)=>
  {
console.log(distable);
  });
}
  );
  
//  exercice 6

let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];

// let newValues1 = values1.filter(element => typeof element == 'number');
// console.log(newValues1);

let newValues = values1.concat(values2,values3);
// newValues.forEach((value) => {

// console.log(value);
// });

for (let i = 0; i<newValues.length;i++)
{   
if (typeof(newValues[i])  == 'number')
{
console.log(newValues[i]);
}
}
//  // console.log(i);

//  if (values1.filter(i)== Number){
//   console.log(values1[i]);
//   }
//   }

//Exercice 7

let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];