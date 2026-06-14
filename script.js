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

    let button =
    document.getElementById(
        "loginButton"
    );

    button.innerHTML =
    "Masuk...";



    setTimeout(function(){

        if(

            username==="keluarga"

            &&

            password==="cctv2026"

        ){

            localStorage.setItem(
                "login",
                "true"
            );

            alert(
                "👋 Selamat Datang\n\nDIFFARRAS GROUP"
            );

            window.location.href =
            "dashboard.html";

        }

        else{

            alert(
                "Username atau password salah!"
            );

            button.innerHTML =
            "Masuk";

        }

    },800);

}



// ENTER UNTUK LOGIN

function handleKey(event){

    if(
        event.key==="Enter"
    ){

        login();

    }

}



// SHOW PASSWORD

function togglePassword(){

    let password =

    document.getElementById(
        "password"
    );

    if(

        password.type==="password"

    ){

        password.type="text";

    }

    else{

        password.type="password";

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

                weekday:
                "long",

                day:
                "numeric",

                month:
                "long",

                year:
                "numeric"

            }

        );

    }

}



updateClock();

setInterval(

    updateClock,

    1000

);



// V360 PRO

function openV360(){

    alert(

        "📷 Silakan buka aplikasi V360 Pro"

    );

}
