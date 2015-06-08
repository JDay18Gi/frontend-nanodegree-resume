


var bio = {
	"name" : "Jason",
	"role" : "Front-End Web Developer",
	"contactInfo" : "jdgirard8@yahoo.com",
	"welcomeMessage" : "Thank you for visiting my site. You are the coolest!",
	"skills" : skills,
	"work" : "blank"
};

var education = { "Schools":[
	{
		"schoolName": "Thomas Edision State College",
		"degreeName": "BSBA Finance"
	},
	{
		"schoolName": "Udacity.com",
		"degree": "Front-End Web Development Nano-degree"
	}
]}

var projects = {
	"project1": "I do not have any objects at this time."
}

var work = {
	"work1": "I do not have any work at this time."
}


if (bio["skills"] > 0) {
	
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%". bio.skills[1]);
	$("skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%". bio.skills[2]);
	$("skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%". bio.skills[3]);
	$("skills").append(formattedSkill);
}

var cameron = {};
cameron.job = "course dev"

var makeCourse = function() {
	//make a course
	console.log("Made a course");
}


var courses = 0;
while(cameron.job === "course dev")  {
	makeCourse();
	courses = courses + 1;
	if (courses === 10) {
		cameron.job = "learning specialist";
	}
}

console.log(cameron.job);




