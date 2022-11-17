console.log("=========Assignment Interface==========");
var IEmployeeInfo = {
    idNumber: '154667',
    name: "Mallikarjun Mali",
    company: "Wipro",
    department: "IT Angulardeveloper",
    occupation: "Engineer",
    email: 'malluroyal@gmail.com',
    city: "Pune"
};
for (var key in IEmployeeInfo) {
    if (Object.prototype.hasOwnProperty.call(IEmployeeInfo, key)) {
        var element = IEmployeeInfo[key];
        console.log("".concat(key, " : ").concat(element));
    }
}
