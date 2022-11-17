var employees = {
    id: "345678",
    name: "Mallikarjun",
    company: "Tcs",
    city: "Pune"
};
console.log("====Object traversing=====");
for (var e in employees) {
    console.log(employees[e]);
}
console.log("====Object De structuring=====");
console.log("Id:-", employees.id);
console.log("Name:-", employees.name);
console.log("Company:-", employees.company);
console.log("City:-", employees.city);
