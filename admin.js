/* =========================
FILE : admin.js
========================= */

/* LOGIN ADMIN */

function loginAdmin(){

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

const error =
document.getElementById("error");

/* USERNAME & PASSWORD */

const adminUser = "admin";
const adminPass = "fahrixz123";

/* LOGIN VALIDATION */

if(username === adminUser &&
password === adminPass){

localStorage.setItem(
"adminLogin",
"true"
);

window.location.href =
"dashboard.html";

}else{

error.innerText =
"Username atau Password salah!";

}

}

/* CHECK LOGIN */

function checkAdmin(){

if(localStorage.getItem("adminLogin")
!== "true"){

window.location.href =
"admin.html";

}

}

/* LOGOUT */

function logoutAdmin(){

let confirmLogout =
confirm("Yakin ingin logout?");

if(confirmLogout){

localStorage.removeItem(
"adminLogin"
);

window.location.href =
"admin.html";

}

}

/* DATA STORAGE */

let products =
JSON.parse(localStorage.getItem("products")) || [];

let testimonials =
JSON.parse(localStorage.getItem("testimonials")) || [];

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

/* SAVE */

function saveProducts(){

localStorage.setItem(
"products",
JSON.stringify(products)
);

}

function saveTestimonials(){

localStorage.setItem(
"testimonials",
JSON.stringify(testimonials)
);

}

function saveOrders(){

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

}

/* ADD PRODUCT */

function addProduct(){

let name =
document.getElementById("productName").value;

let price =
document.getElementById("productPrice").value;

let image =
document.getElementById("productImage").value;

if(name === "" ||
price === "" ||
image === ""){

alert("Isi semua data produk!");

return;

}

products.push({

name:name,
price:price,
image:image

});

saveProducts();

renderProducts();

alert("Produk berhasil ditambahkan!");

}

/* RENDER PRODUCT */

function renderProducts(){

let container =
document.getElementById("adminProductList");

if(!container) return;

container.innerHTML = "";

products.forEach((product,index)=>{

container.innerHTML += `

<div class="admin-product-card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Rp ${product.price}</p>

<button onclick="deleteProduct(${index})">

Hapus

</button>

</div>

`;

});

}

/* DELETE PRODUCT */

function deleteProduct(index){

products.splice(index,1);

saveProducts();

renderProducts();

}

/* ADD TESTIMONIAL */

function addTestimonial(){

let name =
document.getElementById("testimonialName").value;

let message =
document.getElementById("testimonialMessage").value;

if(name === "" || message === ""){

alert("Isi semua data!");

return;

}

testimonials.push({

name:name,
message:message

});

saveTestimonials();

renderTestimonials();

}

/* RENDER TESTIMONIAL */

function renderTestimonials(){

let container =
document.getElementById("testimonialList");

if(!container) return;

container.innerHTML = "";

testimonials.forEach((item,index)=>{

container.innerHTML += `

<div class="testimonial-card">

<h4>${item.name}</h4>

<p>${item.message}</p>

<button onclick="deleteTestimonial(${index})">

Hapus

</button>

</div>

`;

});

}

/* DELETE TESTIMONIAL */

function deleteTestimonial(index){

testimonials.splice(index,1);

saveTestimonials();

renderTestimonials();

}

/* RENDER ORDER */

function renderOrders(){

let container =
document.getElementById("orderList");

if(!container) return;

container.innerHTML = "";

if(orders.length === 0){

container.innerHTML = `

<div class="empty-order">

Belum ada pesanan masuk

</div>

`;

return;

}

orders.forEach((order,index)=>{

container.innerHTML += `

<div class="order-item">

<h4>${order.product}</h4>

<p>👤 ${order.name}</p>

<p>💳 ${order.payment}</p>

<p>📅 ${order.time}</p>

<img src="${order.proof}"
class="payment-proof">

<div class="order-buttons">

<button class="accept-btn"
onclick="approveOrder(${index})">

Setujui

</button>

<button class="reject-btn"
onclick="rejectOrder(${index})">

Tolak

</button>

</div>

</div>

`;

});

}

/* APPROVE */

function approveOrder(index){

alert("Pesanan disetujui");

window.open(
"https://wa.me/6287895917725",
"_blank"
);

}

/* REJECT */

function rejectOrder(index){

orders.splice(index,1);

saveOrders();

renderOrders();

alert("Pesanan ditolak");

}

/* AUTO LOAD */

window.onload = function(){

renderProducts();

renderTestimonials();

renderOrders();

};
