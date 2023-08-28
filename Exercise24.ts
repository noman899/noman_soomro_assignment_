// Version 1: This version runs the if block

// a variable called alien_color and it a value of 'green'
let alien_colors: string = 'green';

// if-else chain to test the alien color
if (alien_colors == 'green') {
    // if the alien's color is green, print a statement that the player just earned 5 points for shooting the alien
    console.log('You just earned 5 points for shooting the alien!');
} else {
    // if the alien's color isn't green, print a statement that the player just earned 10 points
    console.log('You just earned 10 points!');
}

// Version 2: This version runs the else block

// a variable called alien_color and assign it a value of 'red'
alien_colors = 'red';

// if-else chain to test the alien's color
if (alien_colors == 'green') {
    // if the alien's color is green, print a statement that the player just earned 5 points for shooting the alien
    console.log('You just earned 5 points for shooting the alien!');
} else {
    // if the alien's color isn't green, print a statement that the player just earned 10 points
    console.log('You just earned 10 points!');
}
