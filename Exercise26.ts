// variable called age and it a value
let age: number = 34;

//  if-else chain to determine the person's stage of life
if (age < 2) {
    // if the person is less than 2 years old, print a message that the person is a baby
    console.log('You are a baby.');
} else if (age >= 2 && age < 4) {
    // if the person is at least 2 years old but less than 4, print a message that the person is a toddler
    console.log('You are a toddler.');
} else if (age >= 4 && age < 13) {
    // if the person is at least 4 years old but less than 13, print a message that the person is a kid
    console.log('You are a kid.');
} else if (age >= 13 && age < 20) {
    // if the person is at least 13 years old but less than 20, print a message that the person is a teenager
    console.log('You are a teenager.');
} else if (age >= 20 && age < 65) {
    // if the person is at least 20 years old but less than 65, print a message that the person is an adult
    console.log('You are an adult.');
} else {
    // if the person is age 65 or older, print a message that the person is an elder
    console.log('You are an elder.');
}
