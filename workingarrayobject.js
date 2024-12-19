let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
  

  for(let i of students){
   if(i.marks >= 50){
    console.log(i.name," - ",i.subject);
    
   }
  }

  let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];

 for(let fru of words){
    if(fru=="grapefruit"){
        console.log(fru); 
    }
    
    
 }
  
