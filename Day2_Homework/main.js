//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


function food_parse(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
        console.log(`Favorite ${Object.keys(obj)[i]}:`)
        if(Array.isArray(Object.values(obj)[i])) {
            Object.values(obj)[i].forEach(
                place => {
                    if (typeof(place) === 'object') {
                        for (let i = 0; i < Object.keys(place).length; i++) {
                            console.log(`\tFrom ${Object.keys(place)[i]}:`)
                            console.log(`\t-- ${Object.values(place)[i]}`)
                        }
                    } else {
                        console.log(`\t-- ${place}`)
                    }
                }
            )
        } else {
            console.log(`\t-- ${Object.values(obj)[i]}`)
        }
    }
}

console.log(food_parse(person3))



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    printInfo = () => {
        return `${this.name} you are ${this.age} years old.`
    }

    addAge = (i = 1) => {
        return this.age = this.age + i
    }
}

let young_person = new Person('Bobby', 5)
console.log(young_person.printInfo())
console.log('\n')
let old_man = new Person('Tarun', 31)
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())
old_man.addAge()
console.log(old_man.printInfo())



// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let howLongString = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve('Big word')
        } else {
            reject('Small Number')
        }
    })
}

howLongString('Alright, Alright, Alright')
.then((result) => {
    console.log(result)
})
.catch((result) => {
    console.log(result)
})

howLongString('Alright')
.then((result) => {
    console.log(result)
})
.catch((result) => {
    console.log(result)
})



// Codewars - 1
// Multiples of 3 or 5 - 6kyu
/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
 */

function solution(number){
    let total = 0;
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) 
        total += i
    }
    return total
  }

console.log(solution(10))

// Codewars - 2
// Two Sum - 6kyu

/**
 * Write a function that takes an array of numbers (integers for the tests) and a target number.
 * It should find two different items in the array that, when added together, give the target value.
 * The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater,
and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
 */

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let x = i + 1; x < numbers.length; x++) {
            if (numbers[i] + numbers[x] === target) 
            return[i, x]
        }
    }
  }

console.log(twoSum([1, 2, 3], 4))
