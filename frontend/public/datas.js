import logo from "../public/assets/images/logo/logo.png"
import imageProductStickerCustom from "../public/assets/images/galery/img4.jpg"
import imageGaciCustom from "../public/assets/images/galery/img10.jpg"
import imageJasaDesain from "../public/assets/images/product/img1.png"
import imageBanner from "../public/assets/images/product/img2.png"
import stickerProduct from "../public/assets/images/product/sticker product.jpg"

export const products = [
  {
    title: "Sticker Produk UMKM",
    desc: "Label untuk botol, makanan, dan kosmetik. Tahan air dan elegan.",
    img: stickerProduct, // sesuaikan
    sizes: "2x5cm, 4x6cm, custom",
    price: "Menyesuaikan ukuran",
    type: "Stiker",
    delay: 1400
  },
  {
    title: "Sticker Promosi",
    desc: "Cocok untuk branding event, seminar, dan kampanye iklan.",
    img: logo,
    sizes: "5x5cm, A6, A5, custom",
    price: "Menyesuaikan ukuran",
    type: "Stiker",
    delay: 1500
  },
  {
    title: "Sticker Custom",
    desc: "Buat desain sesukamu: karakter, nama, atau logo brand pribadi.",
    img: imageProductStickerCustom,
    sizes: "Bebas (custom shape & size)",
    price: "Harga menyesuaikan ukuran",
    type: "Stiker",
    delay: 1600
  },
  {
    title: "Ganci Custom",
    desc: "Gantungan kunci custom 🚀! Pilih bahan akrilik untuk tampilan glossy atau polimer untuk gaya playful. Semua bisa sesuai keinginanmu!.",
    img: imageGaciCustom,
    sizes: "Bebas (custom shape & size)",
    price: "Harga menyesuaikan bahan",
    type: "Gaci",
    delay: 1700
  },
  {
    title: "Banner",
    desc: "Ciptakan kesan profesional dengan banner berkualitas tinggi. Desain bisa full custom, ukuran fleksibel, dan bahan menyesuaikan kebutuhan untuk hasil yang elegan dan tahan lama.",
    img: imageBanner,
    sizes: "Bebas (custom shape & size)",
    price: "Harga menyesuaikan ukuran dan bahan",
    type: "Banner",
    delay: 1900
  },
  {
    title: "Jasa Desain",
    desc: "Desain bukan cuma gambar, tapi cerita tentang brand kamu 🎨✨. Dengan jasa desain kami, kamu bebas berekspresi dan hasilnya dijamin standout!",
    img: imageJasaDesain,
    sizes: "Bebas (custom shape & size)",
    price: "Harga menyesuaikan ukuran dan bahan",
    type: "Jasa Desain",
    delay: 2000
  },
];

import imageKatalog1 from "../public/assets/images/galery/img1.jpg"
import imageKatalog2 from "../public/assets/images/galery/img2.jpg"
import imageKatalog3 from "../public/assets/images/galery/img3.jpg"
import imageKatalog4 from "../public/assets/images/galery/img4.jpg"
import imageKatalog5 from "../public/assets/images/galery/img5.jpg"
import imageKatalog6 from "../public/assets/images/galery/img6.jpg"
import imageKatalog7 from "../public/assets/images/galery/img7.jpg"
import imageKatalog8 from "../public/assets/images/galery/img8.jpg"
import imageKatalog9 from "../public/assets/images/galery/img9.jpg"
import imageKatalog10 from "../public/assets/images/galery/img10.jpg"
import imageKatalog11 from "../public/assets/images/galery/img11.jpg"

export const katalogDatas = [
  {
    id: 1,
    title: "Gaci Custom",
    category: "Gaci Custom",
    size: "Medium",
    color: "Colorful",
    material: ["polimer"],
    img: imageKatalog1,
  },
  {
    id: 2,
     title: "Gaci Custom",
    category: "Custom",
    size: "Medium",
    color: "Colorful",
    material: ["polimer"],
    img: imageKatalog2,
  },
  {
    id: 23453245,
    title: "Gaci Custom",
    category: "Custom",
    size: "Medium",
    color: "Colorful",
    material: ["polimer"],
    img: imageKatalog3,
  },
  {
    id: 245432,
     title: "Sticker Custom",
    category: "Custom Stiker",
    size: "Small",
    color: "Colorful",
    material: ["Chromo","vinyl"],
    img: imageKatalog4,
  },
  {
    id: 223434,
    title: "Gaci Custom",
    category: "Gaci Custom",
    size: "Medium",
    color: "Colorful",
    material: "polimer",
    img: imageKatalog5,
  },
  {
    id: 3,
     title: "Gaci Custom",
    category: "Gaci Custom",
    size: "Small",
    color: "Colorful",
    material: ["akrilik"],
    img: imageKatalog6,
  },
  {
    id: 3345435222,
     title: "Gaci Custom",
    category: "Gaci Custom",
    size: "Medium",
    color: "Colorful",
    material: ["akrilik"],
    img: imageKatalog7,
  },
  {
    id: 33344445435,
     title: "Sticker Custom",
    category: "Custom",
    size: "Small",
    color: "Colorful",
    material: ["Chromo","vinyl"],
    img: imageKatalog8,
  },
  {
    id: 345324554545,
     title: "Gaci Custom",
    category: "Gaci Custom",
    size: "Medium",
    color: "Colorful",
    material: ["polimer"],
    img: imageKatalog9,
  },
  {
    id: 6346998877,
     title: "Gaci Custom",
    category: "Gaci Custom",
    size: "Small",
    color: "Colorful",
    material: ["akrilik"],
    img: imageKatalog10,
  },
  {
    id: 2118877,
     title: "Sticker Custom",
    category: "Sticker Custom",
    size: "Big",
    color: "Colorful",
    material: ["vinyil"],
    img: imageKatalog11,
  },
  // ...tambahkan lebih banyak data
];

export const faq = [
    {
      id: 1,
      eventKey: "0",
      delay: "1200",
      title: "Bagaimana cara memesan stiker?",
      desc: "Anda dapat memesan stiker melalui formulir pemesanan atau WhatsApp kami.",
    },
    {
      id: 2,
      eventKey: "1",
      delay: "1400",
      title: "Apakah bisa custom desain sendiri?",
      desc: "Tentu, kami menerima desain custom dari pelanggan sesuai keinginan.",
    },
  ];

