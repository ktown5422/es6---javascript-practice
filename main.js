 // Default Params
/*const dealerShip = (name, totalCars) => {
  return `${name} has a minimum of ${totalCars} available cars at all times`
}

dealerShip("Empire", 2000)*/

//Rest Operator

/*const userNames = function(a, b, c, d, e, f) {
  const names = [a,b,c,d,e,f];
  console.log(names)
}

userNames("Joe", "Johnny", "Fred", "Stephanie", "matt", "briant");*/

// with rest opprator

/*
const userNames = function(...names) {
  console.log(names)
}

userNames("Joe", "Johnny", "Fred", "Stephanie", "matt", "briant", "Kevin");
*/
/*
const clients = ["google", "facebook", "kmart"]
const friends = ["Joe", "Matt", "Michael"]

const listOfNames = [...clients, ...friends]

console.log(listOfNames)
*/

// Destructuring Objects

/*
var cars = ['honda', 'bmw']
var userInfo = {
  name: "Kevin",
  lastName: "Townson",
  age: 27,
  cars
}

var {name, lastName, age} = userInfo

console.log(userInfo.cars)

var userData = function(data) {
  var name = data.name
  var lastName = data.lastName
  var age = data.age

  console.log(`User: ${name} ${lastName} Age: ${age}`)
}
userData(userInfo)
*/

// Destructuring Arrays
/*
var cars = ['honda', 'bmw', 'benz']
// es5
var kevinCar = cars[0]
var coreyCar = cars[1]
var mikeCar = cars[2]

// es6 way
var [kevinCar, coreyCar, mikeCar] = cars;

console.log(kevinCar, coreyCar, mikeCar);
*/

// forEach Method
/*
var users = ["Kevin", "Matt", "Joe", "James"]

for (var i = 0; i < users.length; i++) {
  console.log(users[i])
}
// es6 way
users.forEach((user) => {
  console.log(user)
})
*/

// Map Method
/*
var users = [
  {name: "Kevin", age: 27},
  {name: "James", age: 21},
  {name: "polo", age: 29},
]

var userNames = users.map((user) => {
  return user.name
})
console.log(userNames)
*/

/*
// Filter 

var users = [
  {name: "Kevin", age: 27},
  {name: "James", age: 21},
  {name: "polo", age: 29},
]

var newData = users.filter((user) => {
  var name = user.name.toLowerCase()
  name = name.startsWith('k')
  return user.age > 21
})

console.log(newData)
*/

// Find 
/*
var users = [
  {name: "Kevin", age: 27},
  {name: "James", age: 21},
  {name: "polo", age: 29},
]

var newData = users.find((user) => {
  return user.name == "Kevin" && user.age == 27
})
console.log(newData)
*/

// Every and Some Methods
/*
var users = [
  {name: "Kevin", age: 27},
  {name: "James", age: 10},
  {name: "polo", age: 29},
]

var newData = users.every((user) => {
  return user.age >= 18
})
if(newData) {
  console.log("user can drink all night")
} else {
  console.log("user under 21 cant drink")
}
console.log(newData)
*/
