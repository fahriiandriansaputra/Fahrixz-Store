function loginAdmin(){

let username =
document.getElementById("adminUser").value;

let password =
document.getElementById("adminPass").value;

if(
username === "fahriadmin" &&
password === "Fahrixz56##"
){

alert("Login berhasil!");

window.location.href = "dashboard.html";

}else{

alert("Username atau Password salah!");

}

}
