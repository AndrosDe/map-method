  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums){
  results.push(num*2)
};
console.log("For-Loop:", results);
console.log("");

// Using map()
const multByTwo = function (num) {
  return num*2;
}
const mapResults = nums.map(multByTwo)
console.log("mapResults", mapResults);
console.log("");

// Simplified w/ map()
const SimplemapResults = nums.map(function (num) {return num*2;});
console.log("SimplemapResults", SimplemapResults);
console.log("");

// Simplfied w/ map() + arrow function
const simplified = nums.map(num => num*2);
console.log("Simplified MapResults", simplified);
console.log("");


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log("Object Map", studentsWithIds);