const currentUsers = ['user1', 'user2', 'user3', 'user4', 'user5'];
const newUsers = ['user6', 'user7', 'user8', 'user1', 'user2'];

for (const newUser of newUsers) {
    if (currentUsers.map(user => user.toLowerCase()).includes(newUser.toLowerCase())) {
        console.log(`The username ${newUser} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${newUser} is available.`);
    }
}
