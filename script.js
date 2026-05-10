const products=[
{name:'DANA Premium',price:35000,image:'https://via.placeholder.com/300'},
{name:'QRIS Merchant',price:45000,image:'https://via.placeholder.com/300'},
{name:'SeaBank Premium',price:50000,image:'https://via.placeholder.com/300'}
];

let cart=[];

const productList=document.getElementById('productList');

products.forEach(product=>{
productList.innerHTML+=`
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<div class="price">Rp ${product.price.toLocaleString('id-ID')}</div>
<button onclick='addToCart(${JSON.stringify(product)})'>Tambah Keranjang</button>
</div>`;
});

function addToCart(product){
cart.push(product);
updateCart();
}

function updateCart(){
document.getElementById('cartCount').innerText=cart.length;
let subtotal=0;
let html='';
cart.forEach(item=>{
subtotal+=item.price;
html+=`<div class="cart-item"><img src="${item.image}"><div><h4>${item.name}</h4><p>Rp ${item.price.toLocaleString('id-ID')}</p></div></div>`;
});
const fee=cart.length*500;
document.getElementById('cartItems').innerHTML=html;
document.getElementById('subtotal').innerText='Rp '+subtotal.toLocaleString('id-ID');
document.getElementById('adminFee').innerText='Rp '+fee.toLocaleString('id-ID');
document.getElementById('total').innerText='Rp '+(subtotal+fee).toLocaleString('id-ID');
}

function openCart(){document.getElementById('cart').classList.add('active')}
function closeCart(){document.getElementById('cart').classList.remove('active')}

function checkout(){
if(cart.length===0)return alert('Keranjang kosong');
document.getElementById('paymentPopup').classList.add('active');
startCountdown();
}

function closePopup(){document.getElementById('paymentPopup').classList.remove('active')}

function sendProof(){
const proof=document.getElementById('proof').files[0];
if(!proof)return alert('Upload bukti pembayaran');
const orders=JSON.parse(localStorage.getItem('orders'))||[];
orders.push({
items:cart,
status:'pending',
time:new Date().toLocaleString()
});
localStorage.setItem('orders',JSON.stringify(orders));
alert('Bukti pembayaran terkirim, tunggu admin ACC');
closePopup();
cart=[];
updateCart();
}

let timer;
function startCountdown(){
let time=3600;
clearInterval(timer);
timer=setInterval(()=>{
let h=Math.floor(time/3600);
let m=Math.floor((time%3600)/60);
let s=time%60;
document.getElementById('countdown').innerText=`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
if(time<=0)clearInterval(timer);
time--;
},1000);
}

function searchProduct(){
const value=document.getElementById('searchInput').value.toLowerCase();
document.querySelectorAll('.card').forEach(card=>{
card.style.display=card.innerText.toLowerCase().includes(value)?'block':'none';
});
}

function toggleDarkMode(){
document.body.classList.toggle('dark');
}

function toggleChat(){
const box=document.getElementById('chatBox');
box.style.display=box.style.display==='block'?'none':'block';
}

function sendChat(){
const input=document.getElementById('chatInput');
const msg=input.value;
if(!msg)return;
const messages=document.getElementById('chatMessages');
messages.innerHTML+=`<p><b>Anda:</b> ${msg}</p>`;
setTimeout(()=>{
messages.innerHTML+=`<p><b>AI:</b> Admin sedang offline, pesan anda akan dibalas nanti.</p>`;
messages.scrollTop=messages.scrollHeight;
},1000);
input.value='';
}
