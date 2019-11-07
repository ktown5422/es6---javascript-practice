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

