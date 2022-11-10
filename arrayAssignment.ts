console.warn("=========== Before Adding Element ===========");

var newArray:any =["J&J","Pfizer","Sputnik"];

console.log(newArray);

newArray.push("Covaxin");

console.warn("=========== After Adding Element ===========");

console.log(newArray);

console.warn("=========== Traversing In Array Element ===========");

for (let index = 0; index < newArray.length; index++) {
   
    console.log(newArray[index]);
    
}

console.warn("=========== Array Destructure ===========");

var [str1,str2,str3,str4] = newArray;

console.log(`1. 1st Vaccine - ${str1}`);
console.log(`2. 1st Vaccine - ${str2}`);
console.log(`3. 1st Vaccine - ${str3}`);
console.log(`4. 1st Vaccine - ${str4}`);