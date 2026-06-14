function login(){

    let button =
    document.getElementById(
        "loginButton"
    );

    button.innerHTML =
    "Masuk...";



    setTimeout(function(){

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

            alert(
                "Selamat datang kembali!"
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

    },1000);

}



function handleKey(event){

    if(
        event.key==="Enter"
    ){

        login();

    }

}



function checkLogin(){

    if(

        localStorage.getItem(
            "login"
        )!=="true"

    ){

        window.location.href =
        "index.html";

    }

}



function logout(){

    localStorage.removeItem(
        "login"
    );

    window.location.href =
    "index.html";

}



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



function openV360(){

    window.location.href =
    "v360pro://";

}
