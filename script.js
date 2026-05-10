const products = [
{
name:"DANA Premium",
price:35000,
category:"ewallet",
image:"https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg"
},
{
name:"OVO Premium",
price:35000,
category:"ewallet",
image:"https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_ovo_purple.svg"
},
{
name:"QRIS Merchant",
price:45000,
category:"qris",
image:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
},
{
name:"SeaBank",
price:50000,
category:"bank",
image:"https://seeklogo.com/images/S/seabank-logo-5124E1B6C7-seeklogo.com.png"
}
];

let cart = [];

function renderProducts(){
products.forEach((product)=>{

const card = `
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<div class="price">
Rp ${product.price.toLocaleString('id-ID')}
</div>
<button class="buy-btn"
onclick='addToCart(${JSON.stringify(product)})'>
Tambah Keranjang
</button>
</div>
`;

if(product.category==='ewallet'){
document.getElementById('ewallet').innerHTML += card;
}

if(product.category==='qris'){
document.getElementById('qris').innerHTML += card;
}

if(product.category==='bank'){
document.getElementById('bank').innerHTML += card;
}

});
}

renderProducts();

function addToCart(product){
cart.push(product);
updateCart();
alert(product.name + ' berhasil ditambahkan');
}

function updateCart(){

let subtotal = 0;
let html = '';

cart.forEach((item)=>{
subtotal += item.price;

html += `
<div class="cart-item">
<img src=" ${ item . image } ">
<div>
<h4> ${ item . name } </h4>
<p>Rp ${ item . price . toLocaleString ( 'id-ID' ) } </p>
</div>
</div>
` ;
} ) ;

misalkan  adminFee = cart.length * 500 ;​​
misalkan  total = subtotal + biaya administrasi ;

document.getElementById ( ' count ' ) . innerText = cart.length ;​​
dokumen . getElementById ( 'keranjangItem' ) . batinHTML = html ;
dokumen . getElementById ( 'subtotal' ) . innerText = 'Rp ' + subtotal . toLocaleString ( 'id-ID' ) ;
dokumen . getElementById ( 'adminFee' ) . innerText = 'Rp' + Biaya admin . toLocaleString ( 'id-ID' ) ;
dokumen . getElementById ( 'total' ) . innerText = 'Rp' + jumlah . toLocaleString ( 'id-ID' ) ;
}

fungsi  openCart ( ) {
document.getElementById ( ' cart ' ) . classList.add ( ' active ' ) ;
}

fungsi  tutup keranjang ( ) {
document.getElementById ( ' cart ' ) . classList.remove ( ' active ' ) ;
}

fungsi  searchProduct ( ) {
let input = document.getElementById('searchInput').value.toLowerCase();
let cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
let title = card.querySelector('h3').innerText.toLowerCase();

if(title.includes(input)){
card.style.display='block';
}else{
card.style.display='none';
}
});
}

function openPaymentPopup(){
if(cart.length < 1){
alert('Keranjang masih kosong');
return;
}

document.getElementById('paymentPopup').style.display='flex';
startPaymentTimer();
}

function closePaymentPopup(){
document.getElementById('paymentPopup').style.display='none';
}

let paymentTime = 3600;
let timerStarted = false;

function startPaymentTimer(){

if(timerStarted) return;

timerStarted = true;

setInterval(()=>{

let hours = Math.floor(paymentTime/3600);
let minutes = Math.floor((paymentTime%3600)/60);
let seconds = paymentTime%60;

const format = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

document.getElementById('paymentTimer').innerText = format;

if(paymentTime > 0){
paymentTime--;
}

},1000);
}

function submitPayment(){

const proof = document.getElementById('paymentProof').files[0];




}

let orders = JSON.parse(localStorage.getItem('orders')) || [];

orders.push({
id:Date.now(),
status:'pending',
proof:proof.name,
cart:cart
});

localStorage.setItem('orders',JSON.stringify(orders));

closePaymentPopup();

document.getElementById('waitingPopup').style.display='flex';

checkPaymentStatus();
}

function checkPaymentStatus(){

const interval = setInterval(()=>{

let orders = JSON.parse(localStorage.getItem('orders')) || [];

let last = orders[orders.length-1];

if(last.status==='approved'){
clearInterval(interval);

document.getElementById('waitingPopup').style.display='none';
document.getElementById('successPopup').style.display='flex';

setTimeout(()=>{
window.location.href='https://wa.me/6287895917725';
},3000);
}

if(last.status==='rejected'){
clearInterval(interval);

document.getElementById('waitingPopup').style.display='none';
document.getElementById('failedPopup').style.display='flex';
}

},3000);
}

function openChat(){
document.getElementById('chatBox').style.display='flex';
}

function closeChat(){
document.getElementById('chatBox').style.display='none';
}

function sendChat(){

let input = document.getElementById('chatInput');
let text = input.value;

if(text==='') return;

const messages = document.getElementById('chatMessages');

messages.innerHTML += `
<div class="user-msg">${text}</div>
`;

input.value='';

setTimeout(()=>{
messages.innerHTML += `
<div class="bot-msg">
Admin sedang offline, AI membalas otomatis 🤖
</div>
`;
},1000);
}

const testimonials = [
{
name:'Rizky',
text:'Proses cepat dan aman banget!'
},
{
name:'Andi',
text:'Pelayanan ramah dan terpercaya.'
}
];

function renderTestimonials(){
let html='';

testimonials.forEach((item)=>{
html += `
<div class="testimonial-card">
⭐⭐⭐⭐⭐<br><br>
${item.text}<br><br>
- ${item.name}
</div>
`;
});

document.getElementById('testimonialContainer').innerHTML = html;
}

renderTestimonials();
