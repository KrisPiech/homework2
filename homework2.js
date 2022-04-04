//////  INPUT  //////////

const people = [
	{
		firstName: "Bartolomeo",
		lastName: "Lozano",
	},
]
const colors = ["red", "green", "yellow", "blue", "pink", "orange"]

///  MAIN FUNCTION   //
function newPeople() {
	people.map(function (item) {
		const firstHalf = item.firstName.toLowerCase().split("")
		const secondHalf = item.lastName.toLowerCase().split("").reverse()
		const firstNameArr = []
		const secondNameArr = []

		conditionOfNick(firstHalf, firstNameArr)
		conditionOfNick(secondHalf, secondNameArr)
		firstCharUpper(firstNameArr)

		const firstHalfOfNick = firstNameArr.reverse().join("")
		const secondHalfOfNick = secondNameArr.join("")
		const valueOfNickName = firstHalfOfNick.concat(secondHalfOfNick)

		item.nickName = valueOfNickName
        // item.introduceYourself = introduceYourself ///// UNCOMMENT IF YOU CHECK TASK 2!
        // item.getFavouriteColor = getFavouriteColor ///// UNCOMMENT IF YOU CHECK TASK 3!
	})
	return people
}

function conditionOfNick(name, array) {
	if (name.length > 3) {
		for (let i = 0; i < 3; i++) {
			array.push(name[i])
		}
	} else {
		for (let i = 0; i < name.length; i++) {
			array.push(name[i])
		}
	}
}
function firstCharUpper(valueUp) {
	valueUp[valueUp.length - 1] = valueUp[valueUp.length - 1].toUpperCase()
}
newPeople()
console.log(newPeople())

////////  UNCOMMENT SECTION BELOW IF YOU WANT TO CHECK NEXT TASKS  ////////////////////////

//-------------------------------TASK 2--------------------------------------------------//

// function introduceYourself() {
// 	console.log(`Cześć, jestem ${this.firstName} ${this.lastName},ale w szkole mówią na mnie [ ${this.nickName} ]`)
// }
// people.forEach(function (person) {
// 	person.introduceYourself()
// })

//-------------------------------TASK 3--------------------------------------------------//

// function getFavouriteColor(number = 5) {
// 	let sumOfWordsLength = this.firstName.length + this.lastName.length + this.nickName.length
// 	let index = Math.abs(sumOfWordsLength - number) % 6
// 	number < 1
// 		? console.log("podałeś za małą liczbę, liczba nie może być mniejsza niż 1")
// 		: number > 30
// 		? console.log("podałeś za dużą liczbę, liczba nie może być większa niż 30")
// 		: console.log(colors[index])
// }
// people[0].getFavouriteColor()

//-------------------------------TASK 4--------------------------------------------------//

// function favouriteColorOfPerson(numberOfPerson = 1, num_From1_To30 = 5) {
// 	if (numberOfPerson < 1) {
// 		console.log(`Numer osoby nie może być mniejszy niż 1! Osoba o podanym numerze nie istnieje`)
// 		return
// 	} else if (numberOfPerson > people.length) {
// 		console.log(`Osoba o podanym numerze nie istnieje. Podany numer jest większy niż ilość wszystkich osób`)
// 		return
// 	}
// 	let objOfPerson = people[numberOfPerson - 1]
// 	let sum =
// 		objOfPerson.firstName.length +
// 		objOfPerson.lastName.length +
// 		objOfPerson.nickName.length
// 	let index = Math.abs(sum - num_From1_To30) % 6

// 	num_From1_To30 < 1
// 		? console.log("podałeś za małą liczbę, liczba nie może być mniejsza niż 1")
// 		: num_From1_To30 > 30
// 		? console.log("podałeś za dużą liczbę, liczba nie może być większa niż 30")
// 		: console.log(`Nazywam się ${objOfPerson.firstName}, a mój ulubiony kolor to [${colors[index]}]!`)
// }
// for (const person of people) {
// 	let numOfPerson = people.indexOf(person)
// 	favouriteColorOfPerson(numOfPerson + 1)
// }

//---------FUNCTION VARIANT TEST-------------/////////////////

// favouriteColorOfPerson(1,12)
// favouriteColorOfPerson(0,12)
// favouriteColorOfPerson(14,12)
// favouriteColorOfPerson(1,0)
// favouriteColorOfPerson()

//////////////////////////////////////////////////////////////////////////////////////////