//awrite a function that recieves a person object as an argument and returns the person's full name

function returnFullName (person){
    console.log(`${person.firstName} ${person.lastName}`)
}

const person = {
    firstName:"Todd",
    lastName: "Albert",
    email: "todd@bocacode.com"
}

returnFullName(person)