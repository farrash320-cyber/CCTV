// LOGIN
function login() {

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if (
        username === "keluarga" &&
        password === "cctv2026"
    ) {

        localStorage.setItem(
            "login",
            "true"
        );

        window.location.href =
        "dashboard.html";

    } else {

        alert(
            "Username atau password salah!"
        );

    }

}


// CEK LOGIN
function checkLogin() {

    let login =
    localStorage.getItem(
        "login"
    );

    if (
        login !== "true"
    ) {

        window.location.href =
        "index.html";

    }

}


// LOGOUT
function logout() {

    localStorage.removeItem(
        "login"
    );

    window.location.href =
    "index.html";

}


// UPDATE JAM
function updateClock() {

    let now = new Date();

    let clock =
    document.getElementById(
        "clock"
    );

    let date =
    document.getElementById(
        "date"
    );

    if (clock) {

        clock.innerHTML =
        now.toLocaleTimeString(
            "id-ID"
        );

    }

    if (date) {

        date.innerHTML =
        now.toLocaleDateString(
            "id-ID",
            {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    }

}


// AUTO UPDATE
setInterval(
    updateClock,
    1000
);

updateClock();


// AUTO LOGIN
if (
    window.location.pathname.endsWith(
        "index.html"
    )
) {

    let login =
    localStorage.getItem(
        "login"
    );

    if (
        login === "true"
    ) {

        window.location.href =
        "dashboard.html";

    }

}
