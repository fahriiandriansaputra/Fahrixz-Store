function loginAdmin(){

let username = document.getElementById("adminUser").value;
let password = document.getElementById("adminPass").value;

if(username === "adminfahri122" && password === "fahrixz123"){

alert("Login berhasil");
window.location.href = "dashboard.html";

}else{

alert("Username atau password salah");

}

}
