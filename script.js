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

let time = 8109;

const countdown = setInterval(()=>{

  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  document.getElementById("countdown").innerText =
  `${String(hours).padStart(2,"0")} : ${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`;

  if(time > 0){
    time--;
  }else{
    clearInterval(countdown);
    document.getElementById("countdown").innerText = "PROMO BERAKHIR";
  }

},1000);

function toggleChat(){
  document.getElementById("chatBox").classList.toggle("active");
}

function sendChat(){

  let input = document.getElementById("chatInput");
  let messages = document.getElementById("chatMessages");

  if(input.value.trim() !== ""){

    messages.innerHTML += `
      <div class="user-message">
        ${input.value}
      </div>
    `;

    setTimeout(()=>{
      messages.innerHTML += `
        <div class="bot-message">
          Admin sedang offline 🤖 Silakan tunggu atau lanjut ke WhatsApp admin.
        </div>
      `;

      messages.scrollTop = messages.scrollHeight;
    },1000);

    input.value = "";
  }
}

function openLogin(){
  document.getElementById("loginModal").classList.add("active");
}

function closeLogin(){
  document.getElementById("loginModal").classList.remove("active");
}

function checkoutProduct(name, price){
  document.getElementById("checkoutModal").classList.add("active");

  document.getElementById("checkoutProduct").innerText = "Produk: " + name;
  document.getElementById("checkoutPrice").innerText = "Harga: Rp " + price;
}

function closeCheckout(){
  document.getElementById("checkoutModal").classList.remove("active");
}

function verifyPayment(){

  let proof = document.getElementById("paymentProof").files.length;

  if(proof > 0){
    alert("Pembayaran berhasil diverifikasi!");

    window.location.href = "https://wa.me/6287895917725";
  }else{
    alert("Upload bukti pembayaran terlebih dahulu!");
  }
     }
