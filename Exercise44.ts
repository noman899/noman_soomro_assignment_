interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function make_car(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

let car1 = make_car('Toyota', 'Camry', ['color', 'red'], ['year', 2020]);
console.log(car1);

let car2 = make_car('Honda', 'Civic', ['color', 'blue'], ['year', 2019], ['sunroof', true]);
console.log(car2);
