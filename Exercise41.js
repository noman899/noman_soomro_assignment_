"use strict";
const magicians2 = ['David Copperfield', 'Harry Houdini', 'David Blaine'];
function showMagicians(magicians2) {
    for (const magician of magicians2) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (let i = 0; i < magicians2.length; i++) {
        magicians[i] = `${magicians2[i]} the Great`;
    }
}
makeGreat(magicians2);
showMagicians(magicians2);
