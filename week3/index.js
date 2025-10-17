function EmployeeInfo(name,age)
{
    console.log("Hi" +name+ "Your age is"+age)

}
 name='John'
age='26'
EmployeeInfo(name,age)

//code for the second exercise
const skills=(skills)=>{
    console.log("Expert in "+ skills)
}
skills("java")

const student= require('./studentinfo')
const person= require('./person')
console.log("Student name:"+student.getName())
console.log(student.location())
console.log(student.dob)
console.log(student.Studentgrade())
console.log("grade is "+student.Studentgrade(55))
person1=new person("Jim","USA","myemail@gmail.com")
console.log("using Person Module",person1.getPersonInfo())
console.log("Programe ended")
