console.warn("=========== Before Adding Element ===========");
var newArray = ["J&J", "Pfizer", "Sputnik"];
console.log(newArray);
newArray.push("Covaxin");
console.warn("=========== After Adding Element ===========");
console.log(newArray);
console.warn("=========== Traversing In Array Element ===========");
for (var index = 0; index < newArray.length; index++) {
    console.log(newArray[index]);
}
console.warn("=========== Array Destructure ===========");
var str1 = newArray[0], str2 = newArray[1], str3 = newArray[2], str4 = newArray[3];
console.log("1. 1st Vaccine - ".concat(str1));
console.log("2. 1st Vaccine - ".concat(str2));
console.log("3. 1st Vaccine - ".concat(str3));
console.log("4. 1st Vaccine - ".concat(str4));
