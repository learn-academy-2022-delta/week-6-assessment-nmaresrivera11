// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

/* Psuedo Code:
- First I want to create a function name it nameAndJob
- The function will take an array of objects as a parameter
- We will access the objects inside of the array using (.split(" ")) to easier access the first and last name since each are at different indexs in the given array
- I want to assign the first and last name to different variables so we can access adding the substring to the end of the names (.slice) after being capitalized (.toUpperCase)
- Returning the First and Last name capitalized with string interpolation to add "is" and their occupation in a sentence within an array
*/

// a) Create a test with an expect statement using the variable provided.

describe("nameAndJob", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(nameAndJob(people)).toEqual (["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// ReferenceError: nameAndJob is not defined

// b) Create the function that makes the test pass.

const nameAndJob = (array) => {
  return array.map(value => {
    let name = value.name.split(" ")
    let first = name[0].charAt(0).toUpperCase() + name[0].slice(1)
    let last = name[1].charAt(0).toUpperCase() + name[1].slice(1) 
    return `${first} ${last} is ${value.occupation}.`
  })
}
// console.log(nameAndJob(people));

// PASS  ./code-challenges.test.js
// nameAndJob
// ✓ returns an array with a sentence about each person with their name capitalized (1 ms)
// Done in 0.86s.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

/* Psuedo Code:
- First I want to create a function called remainingForces
- Next I want to iterate over an array using (.filter)
- While I filter out the numbers only from the array, I will then (.map)
- Using (.map) will allow me to take all of the numbers remainders and % 3
- Returning an array of only the REMAINDERS of the numbers when divided by 3
*/

// a) Create a test with an expect statement using the variables provided.

describe("remainingForces", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remainingForces(hodgepodge1)).toEqual ([ 2, 0, -1, 0 ])
    expect(remainingForces(hodgepodge2)).toEqual ([ 2, 1, -1 ])
  })
})
// ReferenceError: remainingForces is not defined

// b) Create the function that makes the test pass.

// const remainingForces = (array) => {
//   let filtered = array.filter(value => typeof value ==='number')
//   return filtered.map(value => value % 3)
// }

// PASS  ./code-challenges.test.js
// remainingForces
// ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// Done in 0.88s.

// Refactor :

const remainingForces = (array) => {
  return array.filter(value => typeof value ==='number').map(value => value % 3)
}

// console.log(remainingForces(hodgepodge1));
// console.log(remainingForces(hodgepodge2));

// PASS  ./code-challenges.test.js
// remainingForces
// ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
// Done in 0.82s.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

/* Psuedo Code:
- First I want to create a function called sumsCubed
- This function will take in an array as it's parameters
- I will first iterate over the array using (.map)
- It will cube all the array elements
- The cubed value of the array will be in place of the elemnets
- I will then use reduce to add each value to itself getting the sum of all the cubed elements
- It will return the sum of all cubed
*/


// a) Create a test with an expect statement using the variables provided.

describe("sumsCubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(sumsCubed(cubeAndSum1)).toEqual(99)
    expect(sumsCubed(cubeAndSum2)).toEqual(1125)
  })
})

// ReferenceError: sumsCubed is not defined

// b) Create the function that makes the test pass.

// const sumsCubed = (array) => {
//   let getEm = array.map(v => v*v*v)
//   return getEm.reduce((x,y) => x + y)
// }

// PASS  ./code-challenges.test.js
// sumsCubed
// ✓ returns the sum of all the numbers cubed (1 ms)
// Done in 0.95s.

// Refactor :

const sumsCubed = (array) => {
  return array.map(v => v*v*v).reduce((x,y) => x + y)
}

// PASS  ./code-challenges.test.js
// sumsCubed
// ✓ returns the sum of all the numbers cubed (1 ms)
// Done in 0.72s.

// console.log(sumsCubed(cubeAndSum1));
// console.log(sumsCubed(cubeAndSum2));