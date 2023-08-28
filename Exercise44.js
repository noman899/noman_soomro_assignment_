"use strict";
function make_car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}
let car1 = make_car('Toyota', 'Camry', ['color', 'red'], ['year', 2020]);
console.log(car1);
let car2 = make_car('Honda', 'Civic', ['color', 'blue'], ['year', 2019], ['sunroof', true]);
console.log(car2);
