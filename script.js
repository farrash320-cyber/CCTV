function login(){

    let username =
    document.getElementById(
    "username").value;

    let password =
    document.getElementById(
    "password").value;

    let button =
    document.getElementById(
    "loginButton");

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
            "true");

            window.location.href=
            "dashboard.html";

        }

        else{

            alert(
            "Username atau password salah!");

            button.innerHTML=
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
