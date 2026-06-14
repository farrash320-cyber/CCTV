// =====================
// LOGIN
// =====================

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

        localStorage.setItem(
            "login",
            "true"
        );

        window.location.href=
        "dashboard.html";

    }

    else{

        alert(
            "Username atau password salah!"
        );

    }

}

function handleKey(event){

    if(event.key==="Enter"){

        login();

    }

}


// =====================
// CEK LOGIN
// =====================

function checkLogin(){

    if(
        localStorage.getItem(
            "login"
        )!=="true"
    ){

        window.location.href=
        "index.html";

    }

}



// =====================
// AUTO LOGIN
// =====================

if(
window.location.pathname
.endsWith("index.html")
){

if(
localStorage.getItem(
"login"
)==="true"
){

window.location.href=
"dashboard.html";

}

}



// =====================
// LOGOUT
// =====================

function logout(){

localStorage.removeItem(
"login"
);

window.location.href=
"index.html";

}



// =====================
// JAM
// =====================

function updateClock(){

let now=
new Date();

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



// =====================
// DARK MODE
// =====================

if(
localStorage.getItem(
"darkmode"
)==="on"
){

document.body.classList.add(
"dark"
);

}


function toggleDarkMode(){

document.body.classList.toggle(
"dark"
);

if(

document.body.classList.contains(
"dark"
)

){

localStorage.setItem(
"darkmode",
"on"
);

}

else{

localStorage.setItem(
"darkmode",
"off"
);

}

}



// =====================
// BUKA V360 PRO
// =====================

function openV360(){

window.location.href=
"v360pro://";

setTimeout(function(){

window.open(

"https://play.google.com/store/apps/details?id=com.macrovideo.v380pro",

"_blank"

);

},1500);

}
