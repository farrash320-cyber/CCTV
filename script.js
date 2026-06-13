function showPage(id){

document.querySelectorAll(".page")
.forEach(page=>page.classList.remove("active"));

document.getElementById(id)
.classList.add("active");

}

function updateClock(){

let now=new Date();

document.getElementById("clock")
.innerHTML=now.toLocaleTimeString("id-ID");

document.getElementById("date")
.innerHTML=now.toLocaleDateString("id-ID");

}

setInterval(updateClock,1000);

function logout(){

location.reload();

}
