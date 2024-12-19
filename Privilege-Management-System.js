function getAccessLevel(person) {
    const { role, experience, active, department } = person;

    return role === "admin" 
        ? active 
            ? experience > 5 
                ? department === "IT" 
                    ? "Full IT Admin Access" 
                    : "Full General Admin Access" 
                : "Limited Admin Access" 
            : "Admin Access Revoked"
        : role === "manager"
            ? active
                ? experience > 3
                    ? department === "Sales"
                        ? "Full Sales Manager Access"
                        : "Full Manager Access"
                    : "Limited Manager Access"
                : "Manager Access Revoked"
            : role === "user"
                ? active
                    ? department === "Support"
                        ? "Priority Support Access"
                        : "User Access"
                    : "User Access Revoked"
                : "Invalid Role";
}


let person1={role: "admin", experience:7,active:true, department:"IT"}
console.log(getAccessLevel(person1));

let person2={role:"manager", experience:4, active:true, department:"Marketing"}
console.log(getAccessLevel(person2));

let person3={role:"user", experience:2, active:true, department:"Support"}
console.log(getAccessLevel(person3));

let person4={role:"admin",experience:3,active:false, department:"Finance"}
console.log(getAccessLevel(person4));

let person5={role: "deveoper",experience:5,active:true, department:"IT"}
console.log(getAccessLevel(person5));
