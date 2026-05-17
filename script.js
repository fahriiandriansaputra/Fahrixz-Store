setTimeout(()=>{

loading.style.display="none"

},1500)



let produk=[

{
nama:"Dana Premium",
harga:35000,
img:"img/dana.png"
},

{
nama:"OVO Premier",
harga:35000,
img:"img/ovo.png"
},

{
nama:"GoPay Plus",
harga:35000,
img:"img/gopay.png"
}

]



let game=[

{
nama:"Mobile Legends",
harga:3000,
img:"img/ml.png"
},

{
nama:"Free Fire",
harga:5000,
img:"img/ff.png"
}

]



let cart=
JSON.parse(
localStorage.getItem(
"cart"
)
)||[]



let saldo=
Number(
localStorage.getItem(
"saldo"
)
)||0


saldoText.innerHTML=
saldo



function render(){

produk.forEach(x=>{

document.getElementById(
"produk"
).innerHTML +=

`

<div class="card">

<img src="${x.img}">

<h3>

${x.nama}

</h3>

Rp${x.harga}

<button
class="buy"

onclick="detail('${x.nama}','${x.img}',${x.harga})">

BELI

</button>

</div>

`

})



game.forEach(x=>{

document.getElementById(
"game"
).innerHTML +=

`

<div class="card">

<img src="${x.img}">

<h3>

${x.nama}

</h3>

Rp${x.harga}

<button
class="buy"

onclick="detail('${x.nama}','${x.img}',${x.harga})">

BELI

</button>

</div>

`

})

}


render()



function detail(
nama,
img,
harga
){

detail.style.display=
"flex"

detailNama.innerHTML=
nama

detailHarga.innerHTML=
"Rp"+harga

detailImg.src=
img


window.produkDipilih={

nama,
harga,
img

}

}



function closeDetail(){

detail.style.display=
"none"

}



function addDetail(){

cart.push(
window.produkDipilih
)

localStorage.setItem(
"cart",
JSON.stringify(cart)
)

updateCart()

alert(
"Masuk keranjang"
)

}



function updateCart(){

cartCount.innerHTML=
cart.length


let total=0

cartItem.innerHTML=""


cart.forEach(x=>{

total+=x.harga


cartItem.innerHTML+=

`

<p>

${x.nama}

-
Rp${x.harga}

</p>

`

})


subtotal.innerHTML=
total

}


updateCart()



function openCart(){

home.style.display=
"none"

cuan.style.display=
"none"

cartPage.style.display=
"block"

}



function checkout(){

let pesan=
"Order:%0A"


cart.forEach(x=>{

pesan +=
x.nama+

"%0A"

})


window.open(

"https://wa.me/6285609949819?text="+pesan

)

}



search.addEventListener(
"keyup",

e=>{

let cari=
e.target.value
.toLowerCase()


document.querySelectorAll(
".card"
).forEach(card=>{


card.style.display=

card.innerText
.toLowerCase()

.includes(cari)

?

"block"

:

"none"

})

})



function showHome(){

home.style.display=
"block"

cartPage.style.display=
"none"

cuan.style.display=
"none"

}



function showCuan(){

home.style.display=
"none"

cartPage.style.display=
"none"

cuan.style.display=
"block"

}



function claimTask(){

if(
!bukti.files[0]
){

alert(
"Upload bukti"
)

return

}


saldo += 5000


localStorage.setItem(
"saldo",
saldo
)


saldoText.innerHTML=
saldo


alert(
"Reward masuk"
)

  }
