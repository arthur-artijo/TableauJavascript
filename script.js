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
  // What is the length of the array?
   console.log(myAlphabet.length);

   
 
  //  2. Create an Array
  // Declare and initialize an array called planets with 5 string values.
   let planets = ["Mercure","Vénus"," Terre","Mars","Jupiter"];
  //  console.log each item in the array.
 
   planets.forEach((planet) => {

    console.log(planet);
  }
  
  );

  // Also console.log the index in each iteration.

  for (let i = 0 ;i<planets.length; i++)
{
  
     console.log(i);
 }
    

  // 3. Manipulate data types

  // Declare and initialize an array called someDataTypes.
 let someDataTypes=["prénom",33,true,undefined];

//  Write and display in your console the typeof for each iteration.


someDataTypes.forEach((planet) => {

    console.log(typeof(planet));
  }
  
  );
  // Display in your console the index of each data in your array.
  for (let i = 0 ;i<someDataTypes.length; i++)
{

    console.log(i);
}
  
// 4. Empty Array
// Create an empty Array.
let foods =[];
// console.log this empty Array and keep it during all this exercise.
console.log(foods);
// Add some data in it, the type you want, the theme you want.
foods.push(4,true,undefined);
// Copy your Array
let africanFood =[];
africanFood = foods.slice();
// console.log this new Array
africanFood.forEach((food)=> {
  console.log(food);
  }
  
  );
 
//5. How many letters?


let countries = ["Burundi","Rwanda","Congo","Tanzanie","ouganda","kenya"];
let furnitures = ['Table', 'Chairs','Couch'];
// For each item in this array console.log the letters in each item.
furnitures.forEach((furniture) => {

  let displayTable= furniture.split("");

  console.log(furniture.split(""));

  displayTable.forEach((distable)=>
  {
console.log(distable);
  });
}
  );
  
// // 6.Which one is a number?

let values1= ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2 , true];
let values3 = ["Mars", "Strawberry", 9];

// let newValues1 = values1.filter(element => typeof element == 'number');
// console.log(newValues1);

let newValues = values1.concat(values2,values3);
newValues.forEach((value) => {

console.log(value);
});

for (let i = 0; i<newValues.length;i++)
{   
if (typeof(newValues[i])  == 'number')
{
console.log(newValues[i]);
}
}
 // console.log(i);

 if (values1.filter(i)== Number){
  console.log(values1[i]);
  }
  

// //Exercice 7

// let studentCoursesA = ['Math', 'English', 'Programming'];
// let studentCoursesB = ['Geography', 'Spanish', 'Programming'];