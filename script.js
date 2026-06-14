// LOGIN
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



// CEK LOGIN
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



// LOGOUT
function logout(){

    localStorage.removeItem(
        "login"
    );

    window.location.href=
    "index.html";

}



// JAM
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



// BUKA V360 PRO
function openV360(){

    // mencoba membuka aplikasi

    window.location.href =
    "v360pro://";



    // jika gagal,
    // setelah 2 detik arahkan ke Play Store

    setTimeout(function(){

        window.open(

        "https://play.google.com/store/apps/details?id=com.macrovideo.v380pro",

        "_blank"

        );

    },2000);

}
