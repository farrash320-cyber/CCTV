function openPage(id){

document
.querySelectorAll(".page")
.forEach(page=>page.classList.remove("active"));

document
.getElementById(id)
.classList.add("active");

}


function showLogin(){

openPage("loginPage");

}


function login(){

let username =
document.getElementById("username").value;

let password =
document.getElementById("password").value;


if(
username==="keluarga"
&&
password==="cctv2026"
){

openPage("dashboardPage");

}
else{

alert("Username atau password salah!");

}

}


function logout(){

document
.getElementById("username")
.value="";

document
.getElementById("password")
.value="";

openPage("homePage");

}



function updateClock(){

let now = new Date();

document
.getElementById("clock")
.innerHTML=
now.toLocaleTimeString("id-ID");

document
.getElementById("date")
.innerHTML=
now.toLocaleDateString(
"id-ID",
{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
}
);

}


updateClock();

setInterval(updateClock,1000);
