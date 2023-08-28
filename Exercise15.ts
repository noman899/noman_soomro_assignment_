let guests1: string[] = ["Asad", "Nadeem", "Zeeshan", "Sunny", "Sajid"];
console.log('I can only invite two people for dinner.');
while (guests1.length > 2) {
    let removedGuest = guests1.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
for (let guests of guests1) {
    console.log(`Dear ${guests}, you are still invited to dinner.`);
}
guests1.splice(0, 2);
console.log(guests1);
