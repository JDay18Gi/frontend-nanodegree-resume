Homework Stuff:


var name = "Jason D. Girard";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var SchoolName = "Harvard Extension School";
var SchoolWeb = "http://www.extension.harvard.edu/";

var formattedSchoolName = HTMLschoolName.replace("%data%", SchoolName);
var formattedSchoolWeb = formattedSchoolName.replace("#", SchoolWeb);

$("#education").append(formattedSchoolWeb);

var skills = ["Problem Solving", "HTML", "CSS", "JavaScript"]