import './style.css';
import polaRuang from "./assets/pola-ruang-street.json";

const modalTrigger = document.querySelector('#modal-trigger');
const modalBg = document.querySelector('#modal-bg');
const batalkan = document.querySelector("#batal");
const elTigaBulan = document.querySelectorAll(".tiga-bulan");
const elSetahun = document.querySelectorAll(".setahun");
const namaPaket = document.querySelector("#nama-paket");
const harga = document.querySelector("#harga");
const form = document.forms['daftar-preorder'];
const elInsta = document.querySelectorAll(".instagram");
const elWa = document.querySelectorAll(".whatsapp");
const elLinkedin = document.querySelectorAll(".linkedin");



let toggleState = false;
let paketTerpilih;

mapboxgl.accessToken = 'pk.eyJ1IjoibWFuYWY5MyIsImEiOiJjazJhNXhzeHYxN25tM2JucDBmNjZlYjNmIn0.eXfSDYhY77yd0mfJmR3b9A';
    const map = new mapboxgl.Map({
        container: 'map',
        zoom: 9.4,
        center: [119.8309,-8.5952],
        pitch: 0,
        bearing: 0,
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: polaRuang
    });

    map.on('style.load', () => {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    });
  

const toggleModal = () => {
    if (toggleState) {
        modalBg.classList.remove("flex");
        modalBg.classList.add("hidden");
        toggleState = false
    } else {
        modalBg.classList.remove("hidden");
        modalBg.classList.add("flex");
        toggleState = true
    }
    console.log(toggleState);
}

const setahun = {
    nama: "Plannio Pro 1 Tahun",
    harga: "Rp300.000",
    link: "https://app.midtrans.com/payment-links/1722601923127"
}

const tigaBulan = {
    nama: "Plannio Pro 3 Bulan",
    harga: "Rp100.000",
    link: "https://app.midtrans.com/payment-links/1722602087753"
}

const gantiSetahun = () => {
    namaPaket.textContent = setahun.nama;
    harga.textContent = setahun.harga;
    paketTerpilih = setahun.link
}

const gantiTigaBulan = () => {
    namaPaket.textContent = tigaBulan.nama;
    harga.textContent = tigaBulan.harga;
    paketTerpilih = tigaBulan.link
}

modalTrigger.addEventListener("click", toggleModal)
batalkan.addEventListener("click", toggleModal)

for (let i = 0; i < elSetahun.length; i++) {
    elSetahun[i].addEventListener("click", gantiSetahun)
}

for (let i = 0; i < elTigaBulan.length; i++) {
    elTigaBulan[i].addEventListener("click", gantiTigaBulan)
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbwqWm_C_GIFhYLwg34g527VShexBnPywF-5zjR6qTrTraOFRADrE5U12zWFZYk-BPYbZA/exec'
form.addEventListener('submit', e => {
  e.preventDefault()
  window.open(paketTerpilih);
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log("post success"))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})



for (let x of elInsta) {
    x.addEventListener("click", () => {
        window.open('https://www.instagram.com/geokatalis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==')
    })
}




// Goal
// Klik Lanjut Pembayaran {
//     If (ada yang kosong / belum milih harga) {
//         Highlight yang kosong dan suruh isi
//     } else {
//         buka link pembayaran sesuai paket yang dipilih,
//         input data pengguna ke spreasheet.
//     }
// }


// Solusi - Highlight yang kosong
// 1. desain kondisi kalau ada info yang kosong
        // PAKE warna biasa aja dulu coba
// 2. bikin fungsionalitas untuk menghilight yang kosong itu

// Solusi - buka link pembayaran sesuai paket yang dilih
// 1. cari tahu cara buka link lewat js (DONE)
        // PAKE window.open("link di sini")
// 2. buat link 6 bulan di midtrans
// 3. apply

// Solusi - input daya pengguna ke spreadsheet
// 1. cari tahu caranya di yutub
// 2. capture value dari semua input
// 3. terapkan