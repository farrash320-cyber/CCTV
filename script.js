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
