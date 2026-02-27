// object creation
const user = {
  username: "standard_user",
  password: "secret_sauce"
};
// console.log(user);
// Accessing value of object
console.log(user.username);
console.log(user.password);
console.log('-------------------------------');
console.log(user["password"]);
console.log(user["username"]);
console.log('-------------------------------');

const usernameVal_API = user.username;
const passwordVal = user.password;
console.log('-------------------------------');
console.log(usernameVal_API);
console.log(passwordVal);

user.email = "standard@example.com";
user.isAdmin = false;
console.log(user);

user.username = "Updated data";
console.log(user);