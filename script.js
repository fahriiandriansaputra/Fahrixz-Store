function searchProduct(){

let input = document.getElementById("searchInput").value.toLowerCase();
let cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

}

const orders = [
"🔥 Rizky dari Jakarta membeli QRIS Merchant",
"⚡ Andi dari Bandung membeli DANA Premium",
"✅ Fajar dari Surabaya membeli SeaBank",
"💳 Rina dari Medan membeli QRIS UMKM",
"🏦 Aldi dari Palembang membeli Bank Jago"
];

setInterval(()=>{

let random = orders[Math.floor(Math.random()*orders.length)];

document.getElementById("popupOrder").innerText = random;

},4000);

let time = 3600;

setInterval(()=>{

let hours = Math.floor(time / 3600);
let minutes = Math.floor((time % 3600) / 60);
let seconds = time % 60;

let display =
`${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`;

let countdown = document.getElementById("countdown");

if(countdown){
countdown.innerText = display;
}

if(time > 0){
time--;
}

},1000);

function openPayment(product,price){
document.getElementById("paymentModal").style.display = "flex";
}

function closePayment(){
document.getElementById("paymentModal").style.display = "none";
}

let paymentTime = 3600;

setInterval(()=>{

let minutes = Math.floor(paymentTime / 60);
let seconds = paymentTime % 60;

let timer = document.getElementById("paymentCountdown");

if(timer){

timer.innerText =
`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

if(paymentTime > 0){
paymentTime--;
}

}

},1000);

function sendToWhatsApp(){

alert("Bukti pembayaran berhasil diupload. Anda akan diarahkan ke WhatsApp Admin.");

window.open(
"https://wa.me/6287895917725?text=Halo Admin saya sudah melakukan pembayaran",
"_blank"
);

}

function toggleChat(){

let chat = document.getElementById("chatBody");

if(chat.style.display === "block"){
chat.style.display = "none";
}else{
chat.style.display = "block";
}

}

function sendMessage(){

let input = document.getElementById("chatInput");
let messages = document.getElementById("chatMessages");

if(input.value.trim() === "") return;

messages.innerHTML +=
`<div class="user-message">${input.value}</div>`;

let userText = input.value.toLowerCase();

input.value = "";

setTimeout(()=>{

let reply = "Admin sedang offline. AI siap membantu Anda 👋";

if(userText.includes("harga")){
reply = "Silakan pilih produk untuk melihat harga terbaru ya 😊";
}

if(userText.includes("qris")){
reply = "Pembayaran saat ini hanya support QRIS manual.";
}

if(userText.includes("proses")){
reply = "Estimasi proses 1–5 menit setelah pembayaran diverifikasi.";
}

messages.innerHTML +=
`<div class="bot-message">${reply}</div>`;

messages.scrollTop = messages.scrollHeight;

},1000);

  }
