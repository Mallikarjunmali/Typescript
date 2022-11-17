console.log("=========Assignment Interface==========");

interface IEmployeeInfo { 
  idNumber: number;
  name:string;
  company:any;
  department:any;
  occupation:any;
  email :any;
  city:any;

}
var IEmployeeInfo:any ={ 
  idNumber:'154667',
  name:"Mallikarjun Mali",
  company:"Wipro",
  department:"IT Angulardeveloper",
  occupation:"Engineer",
  email:'malluroyal@gmail.com',
  city:"Pune",

}
for (const key in IEmployeeInfo) {
  if (Object.prototype.hasOwnProperty.call(IEmployeeInfo, key)) {
      const element = IEmployeeInfo[key];
      console.log(`${key} : ${element}`);
  }
}