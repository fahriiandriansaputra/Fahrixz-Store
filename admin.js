/* =========================
LOGIN ADMIN
========================= */

function loginAdmin(){

let username =
document.getElementById("adminUsername").value;

let password =
document.getElementById("adminPassword").value;

/* USERNAME & PASSWORD */

const adminUser = "admin";
const adminPass = "fahrixz123";

if(username === adminUser &&
password === adminPass){

localStorage.setItem(
"adminLogin",
"true"
);

window.location.href =
"dashboard.html";

}else{

alert(
"Username atau Password salah!"
);

}

}

/* =========================
LOGOUT ADMIN
========================= */

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

/* =========================
DATA STORAGE
========================= */

let products =
JSON.parse(localStorage.getItem("products")) || [];

let testimonials =
JSON.parse(localStorage.getItem("testimonials")) || [];

let orders =
JSON.parse(localStorage.getItem("orders")) || [];

/* =========================
SAVE DATA
========================= */

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

/* =========================
ADD PRODUCT
========================= */

function addProduct(){

let productName =
document.getElementById("productName").value;

let productPrice =
document.getElementById("productPrice").value;

let productImage =
document.getElementById("productImage").value;

if(
productName === "" ||
productPrice === "" ||
productImage === ""
){

alert("Isi semua data produk!");

return;

}

let newProduct = {

name: productName,
price: productPrice,
image: productImage

};

products.push(newProduct);

saveProducts();

renderProducts();

alert("Produk berhasil ditambahkan!");

document.getElementById("productName").value = "";
document.getElementById("productPrice").value = "";
document.getElementById("productImage").value = "";

}

/* =========================
RENDER PRODUCT
========================= */

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

/* =========================
DELETE PRODUCT
========================= */

function deleteProduct(index){

products.splice(index,1);

saveProducts();

renderProducts();

}

/* =========================
ADD TESTIMONIAL
========================= */

function addTestimonial(){

let customer =
document.getElementById("testimonialName").value;

let message =
document.getElementById("testimonialMessage").value;

if(customer === "" || message === ""){

alert("Isi semua testimoni!");

return;

}

let newTestimonial = {

name: customer,
message: message

};

testimonials.push(newTestimonial);

saveTestimonials();

renderTestimonials();

alert("Testimoni berhasil ditambahkan!");

document.getElementById("testimonialName").value = "";
document.getElementById("testimonialMessage").value = "";

}

/* =========================
RENDER TESTIMONIAL
========================= */

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

/* =========================
DELETE TESTIMONIAL
========================= */

function deleteTestimonial(index){

testimonials.splice(index,1);

saveTestimonials();

renderTestimonials();

}

/* =========================
ORDER SYSTEM
========================= */

function addOrder(orderData){

orders.push(orderData);

saveOrders();

renderOrders();

}

/* =========================
RENDER ORDERS
========================= */

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
class="bukti-pembayaran">

<div class="order-buttons">

<button class="accept-btn"
onclick="approveOrder( ${ index } )">

Setujui

</button>

<button class="reject-btn"
onclick="rejectOrder( ${ index } )">

Tolak

</button>

</div>

</div>

` ;

} ) ;

}

/* =========================
SETUJUI PESANAN
========================= */

fungsi  approveOrder ( indeks ) {

peringatan (
"Pesanan berhasil disetujui"
) ;

jendela.buka (​​
"https://wa.me/6287895917725" ,
"_kosong"
) ;

}

/* =========================
TOLAK PESANAN
========================= */

fungsi  rejectOrder ( indeks ) {

pesanan.sambung ( indeks , 1 ) ;​​

simpanPesanan ( ) ;

renderOrders ( ) ;

peringatan (
"Pesanan ditolak"
) ;

}

/* =========================
MUAT OTOMATIS
========================= */

jendela.onload = fungsi ( ) {​​

renderProducts ( ) ;

renderTestimonials ( ) ;

renderOrders ( ) ;

} ;
