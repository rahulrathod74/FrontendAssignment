const students=[
    { name: "Alice", age: 20, marks: { math: 85, science: 90, english: 88 } },
    { name: "Rahul", age: 24, marks: { math: 88, science: 98, english: 98 } },
    {name:  "Gopal",  age:27, marks: {math: 89, science: 95,  english: 97 } }
      
]

// add a new stundent object in array
students.push({name:"karan", age:25,marks:{math:83, science:94, english:96} })

// for(let i=0;i<students.length;i++){
//    console.log(students.name)
//     console.log(Object.values(students.marks))
    
// }


students.forEach(student=>{
    const {math,science,english}=student.marks
    const avrage=(math + science + english) / 3
    student.avragemarks=avrage
    console.log(`${student.name} avrage marks: ${avrage.toFixed(2)}`);
    
})

// find the student with the highest avrages mark

const topstudent=students.reduce((highest,student)=>{
    return(student.avragemarks > highest.avragemarks ) ? student : highest
})
console.log(topstudent.name);
console.log("Details:",topstudent.avragemarks.toFixed(3))




