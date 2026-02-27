// object creation
const student = {
  name: "name",
  age: "age" ,
};
// console.log(user);
// Accessing value of object
console.log(student.name);
console.log(student.age);

console.log('---------------------------');
console.log(student["name"]);
console.log(student["age"]);

console.log('---------------------------');
const nameVal_API = student.name;
const ageVal = student.age;

console.log('---------------------------');
console.log(nameVal_API);
console.log(ageVal);

student.course = "Math";
student.isEnrolled = false;
console.log(student);

// Print using a loop
for (let key in student) {
  console.log(key + ":", student[key]);
}

// Update the age
student.age = "updated age";

// Add new property called grade
student.grade = "grade";
console.log(student);


