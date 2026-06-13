// ======================
// LOGIN
// ======================

function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(
        username === "keluarga"
        &&
        password === "cctv2026"
    ){

        localStorage.setItem(
            "login",
            "true"
        );

        window.location.href =
        "dashboard.html";

    }

    else{

        alert(
            "Username atau password salah!"
        );

    }

}


// ======================
// CEK LOGIN
// ======================

function checkLogin(){

    let status =
    localStorage.getItem(
        "login"
    );

    if(
        status !== "true"
    ){

        window.location.href =
        "index.html";

    }

}


// ======================
// LOGOUT
// ======================

function logout(){

    localStorage.removeItem(
        "login"
    );

    window.location.href =
    "index.html";

}


// ======================
// AUTO LOGIN
// ======================

if(
    window.location.pathname
    .endsWith("index.html")
){

    let status =
    localStorage.getItem(
        "login"
    );

    if(
        status === "true"
    ){

        window.location.href =
        "dashboard.html";

    }

}


// ======================
// JAM DAN TANGGAL
// ======================

function updateClock(){

    let now =
    new Date();

    let clock =
    document.getElementById(
        "clock"
    );

    let date =
    document.getElementById(
        "date"
    );

    if(clock){

        clock.innerHTML =
        now.toLocaleTimeString(
            "id-ID"
        );

    }

    if(date){

        date.innerHTML =
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


// ======================
// STATISTIK KAMERA
// ======================

function updateStats(){

    let totalCamera =
    document.getElementById(
        "totalCamera"
    );

    let onlineCamera =
    document.getElementById(
        "onlineCamera"
    );

    if(totalCamera){

        totalCamera.innerHTML =
        "4";

    }

    if(onlineCamera){

        onlineCamera.innerHTML =
        "4";

    }

}

updateStats();


// ======================
// DARK MODE
// ======================

function toggleDarkMode(){

    document.body.classList.toggle(
        "dark"
    );

}
