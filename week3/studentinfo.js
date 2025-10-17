
const dateofBirth="12/12/1980"
const getStudentName = () =>
{
   
}

const getCampusName =() =>
    {return ("UEl Campus")}
//exporting function and variable from outside the module
exports.getName=getStudentName
exports.location=getCampusName
exports.dob=dateofBirth
//how to export function from parameters
exports.Studentgrade=(marks)=>
{
    if(marks>50 && marks<70)return ("B grade")
        else return ("A grade")
}