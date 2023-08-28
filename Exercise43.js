"use strict";
function make_sandwich(...items) {
    console.log('Making a sandwich with the following items:');
    for (let item of items) {
        console.log(`- ${item}`);
    }
}
make_sandwich('chicken', 'cheese', 'lettuce');
make_sandwich('sausage', 'beef', 'tomato', 'mayo');
make_sandwich('peanut butter', 'jelly');
