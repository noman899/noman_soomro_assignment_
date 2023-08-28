// Version 1: This version pass the if test

// variable called alien_color and it a value of 'green'
let alien_color: string = 'green';

// if statement to test whether the alien color is green
if (alien_color == 'green') {
    // if it is, print a message that the player just earned 5 points
    console.log('You just earned 5 points!');
}

// Version 2: This version fails the if test (no output)

// a variable called alien_color and it a value of 'red'
alien_color = 'red';

// if statement to test whether the alien color is green
if (alien_color == 'green') {
    // if it is, print a message that the player just earned 5 points
    console.log('You just earned 5 points!');
}
