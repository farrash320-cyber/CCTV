function login(){

let username =
document.getElementById(
"username"
).value;

let password =
document.getElementById(
"password"
).value;

if(
username==="keluarga"
&&
password==="cctv2026"
){

window.location.href=
"dashboard.html";

}
else{

alert(
"Username atau password salah!"
);

}

}


function logout(){

window.location.href=
"index.html";

}


function updateClock(){

let now=new Date();

let clock=
document.getElementById(
"clock"
);

let date=
document.getElementById(
"date"
);

if(clock){

clock.innerHTML=
now.toLocaleTimeString(
"id-ID"
);

}

if(date){

date.innerHTML=
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

}

updateClock();

setInterval(
updateClock,
1000
);
