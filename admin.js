function loginAdmin(){

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if(username==='admin' && password==='admin123'){
localStorage.setItem('adminLogin','true');
window.location.href='dashboard.html';
}else{
alert('Username atau password salah');
}
}

function logoutAdmin(){
localStorage.removeItem('adminLogin');
window.location.href='admin.html';
}

if(window.location.pathname.includes('dashboard.html')){

if(localStorage.getItem('adminLogin')!=='true'){
window.location.href='admin.html';
}

loadOrders();
}

function loadOrders(){

const orderList = document.getElementById('orderList');

if(!orderList) return;

let orders = JSON.parse(localStorage.getItem('orders')) || [];

let html='';

orders.forEach((order,index)=>{

html += `
<div class="testimonial-card">
<h3>Pesanan #${index+1}</h3>
<p>Status : ${order.status}</p>
<p>Bukti : ${order.proof}</p>
<br>
<button class="buy-btn" onclick="approveOrder(${order.id})">
ACC
</button>
<br><br>
<button class="buy-btn" onclick="rejectOrder(${order.id})">
Tolak
</button>
</div>
`;
});

orderList.innerHTML = html;
}

function approveOrder(id){

let orders = JSON.parse(localStorage.getItem('orders')) || [];

orders = orders.map((order)=>{
if(order.id===id){
order.status='approved';
}
return order;
});

localStorage.setItem('orders',JSON.stringify(orders));
loadOrders();
}

function rejectOrder(id){

let orders = JSON.parse(localStorage.getItem('orders')) || [];

orders = orders.map((order)=>{
if(order.id===id){
order.status='rejected';
}
return order;
});

localStorage.setItem('orders',JSON.stringify(orders));
loadOrders();
}
