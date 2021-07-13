
// document.getElementById("name").innerHTML="Ankur";
document.getElementById("user_name").innerHTML=localStorage.getItem("name");
document.getElementById("DOB").innerHTML=localStorage.getItem("DOB");
document.getElementById("role").innerHTML=localStorage.getItem("role");
document.getElementById("mail").innerHTML=localStorage.getItem("mail");
document.getElementById("phone").innerHTML=localStorage.getItem("phone");
document.getElementById("city").innerHTML=localStorage.getItem("city");

// Exprinece//
document.getElementById("Experience").innerHTML=JSON.parse(localStorage.getItem("Experience")).exp;
document.getElementById("Experience-desc").innerHTML=JSON.parse(localStorage.getItem("Experience")).description;
document.getElementById("Exp-start").innerHTML=JSON.parse(localStorage.getItem("Experience")).start;
document.getElementById("Exp-end").innerHTML=JSON.parse(localStorage.getItem("Experience")).end;

//Project//

// console.log(localStorage.getItem("Experience"))
// console.log(JSON.parse(localStorage.getItem("Experience")))
document.getElementById("project-title").innerHTML=JSON.parse(localStorage.getItem("Project")).project;
document.getElementById("project-desc").innerHTML=JSON.parse(localStorage.getItem("Project")).description;
document.getElementById("project-start").innerHTML=JSON.parse(localStorage.getItem("Project")).start;
document.getElementById("project-end").innerHTML=JSON.parse(localStorage.getItem("Project")).end;

//education/
document.getElementById("Education1").innerHTML=localStorage.getItem("Education1");
document.getElementById("Education2").innerHTML=localStorage.getItem("Education2");
document.getElementById("Education3").innerHTML=localStorage.getItem("Education3");

//skill//

document.getElementById("skill1").innerHTML=localStorage.getItem("skill1");
document.getElementById("skill2").innerHTML=localStorage.getItem("skill2");
// document.getElementById("skill1").innerHTML=localStorage.getItem("skill1");
