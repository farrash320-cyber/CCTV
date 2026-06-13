// LOGIN
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (
        username === "keluarga" &&
        password === "cctv2026"
    ) {

        // Simpan status login
        localStorage.setItem("login", "true");

        // Masuk ke dashboard
        window.location.href = "dashboard.html";

    } else {

        alert("Username atau password salah!");

    }

}


// CEK LOGIN
function checkLogin() {

    let loginStatus = localStorage.getItem("login");

    if (loginStatus !== "true") {

        window.location.href = "index.html";

    }

}


// LOGOUT
function logout() {

    localStorage.removeItem("login");

    window.location.href = "index.html";

}


// JAM DAN TANGGAL
function updateClock() {

    let now = new Date();

    let clock = document.getElementById("clock");
    let date = document.getElementById("date");

    if (clock) {

        clock.innerHTML = now.toLocaleTimeString("id-ID");

    }

    if (date) {

        date.innerHTML = now.toLocaleDateString("id-ID", {

            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"

        });

    }

}


// UPDATE SETIAP DETIK
setInterval(updateClock, 1000);


// JALANKAN SEKALI SAAT HALAMAN DIBUKA
updateClock();
