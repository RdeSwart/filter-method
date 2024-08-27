  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough);

let paulResult = people.filter(person => person.name == 'Paul')[0];
// Because this callback function is arbitrary, we could shorten it even further by changing
// the person perameter to just p for cleaner, more elegant code
// let paulResult = people.filter(p => p.name == 'Paul');
console.log(paulResult);




// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];
//         // I’ll pass in an arrow function taking the student as a parameter,
//         // and open a set of curly braces to contain  its logic.   
// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5) //Now, I’m going to approach this by  
//                                     // filtering the inner skills array to only those  skills with at least five years of experience.
//     return strongSkills.length > 0;
// });
// console.log(candidates);

// **********************************************************************************************************************************
//lets make it easier to read and code - In this case, I would extract the whole filter function into its  own function, for example, called hasStrongSkills: 
// Then I can just pass the hasStrongSkills  function to my filter, which is a lot  
// easier to read, plus it allows us to  reuse the filter function elsewhere. 


// All we've done is take what was inside the parentheses and assign it to a variable. 
//This isolates the callback function and makes it easier to reuse.


const has5YearsExp = skill => skill.yrsExperience >= 5
const hasStrongSkills = student => student.skills.filter(has5YearsExp).length > 0;
  // let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);  extract the inner  filter into another external function  
  // called has5YearsExp, and then pass it  inside the hasStrongSkills function. 
  //let strongSkills = student.skills.filter(has5YearsExp).length > 0;
  // return strongSkills.length > 0;         
                  //This actually allows me to then remove the return  statement and the strongSkills variable entirely,  
                  // just attach .length onto the  end of the inner filter instead,  
                  // and turn everything into a  nice single line of code.  


const candidates = students.filter(hasStrongSkills);
console.log(candidates);