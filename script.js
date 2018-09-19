 /* Program to dynamically generate JSON object*/
 // create Student class with properties name, age, weight, height,friends,collegedetails
 class Student
 {
	 constructor(name,age,weight,height,friends,collegedetails)
	 {
		 this.name = name;
		 this.age = age;
		 this.height = height;
		 this.friends = friends;
		 this.collegedetails = collegedetails;
	 }
 }
// Create college Details class with name , city and pincode
 class collegeDetails  
 {
    constructor(name,city,pincode){

		this.name = name;
		this.city = city;
		this.pincode = pincode;
	}  
 }
// create object of collegeDetails
var colgDetls = new collegeDetails("Random Model college","Random City","00000");
// create friends array
var friends = ["random guys","more random guys","some more"];
// Finally create students
var student1 = new Student("Random Guy1",18,66,170,friends,colgDetls);
var student2 = new Student("Random Guy2",19,67,171,friends,colgDetls);
var student3 = new Student("Random Guy3",20,68,172,friends,colgDetls);
var studentList = [];
// Adding into the array
studentList.push(student1);
studentList.push(student2);
studentList.push(student3);
// Show on the console as text
console.log(JSON.stringify(studentList));



