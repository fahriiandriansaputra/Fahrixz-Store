function loginAdmin(){
const username=document.getElementById('username').value;
const password=document.getElementById('password').value;
if(username==='fahrixz'&&password==='fahri76'){
localStorage.setItem('adminLogin','true');
window.location='dashboard.html';
}else{
alert('Login gagal');
}
}

if(window.location.pathname.includes('dashboard.html')){
if(localStorage.getItem('adminLogin')!=='true'){
window.location='admin.html';
}
loadOrders();
setInterval(loadOrders,2000);
}

function loadOrders(){
const orders=JSON.parse(localStorage.getItem('orders'))||[];
document.getElementById('notifCount').innerText=orders.length;
document.getElementById('totalOrders').innerText=orders.length+' Pesanan';
let html='';
orders.forEach((order,index)=>{
html+=`
<div class="card">
<h3>Pesanan ${index+1}</h3>
<p>Status: ${order.status}</p>
<p>${order.time}</p>
<button onclick="approveOrder(${index})">ACC</button>
<button onclick="rejectOrder(${index})" style="margin-top:10px;background:red">Tolak</button>
</div>`;
});
document.getElementById('orders').innerHTML=html;
}

function approveOrder(index){
const orders=JSON.parse(localStorage.getItem('orders'))||[];
orders[index].status='approved';
localStorage.setItem('orders',JSON.stringify(orders));
window.open('https://wa.me/6287895917725','_blank');
loadOrders();
}

function rejectOrder(index){
const orders=JSON.parse(localStorage.getItem('orders'))||[];
orders[index].status='rejected';
localStorage.setItem('orders',JSON.stringify(orders));
loadOrders();
}

function logoutAdmin(){
localStorage.removeItem('adminLogin');
window.location='admin.html';
}
