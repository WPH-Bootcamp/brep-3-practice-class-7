// Deklarasi + inisialiasi
let nama_depan = "Fauzi";
let nama_belakang = "Fadhlurrohman";
let nama_lengkap = nama_depan + " " + nama_belakang;
let nama_lengkap_lain = `${nama_depan} ${nama_belakang}`;
// Reinisialiasi
nama_depan = "Tony";

// Truthy value
let nilai = 75;
let nama = "Fauzi";
let hasil = true;

// Falsy value
let nilai_kosong = 0;
let nama_kosong = "";
let hasil_kosong = false;

let menyapa_pagi = "selamat pagi, ";
let menyapa_sore = "selamat sore, ";
let menyapa_malam = "selamat malam, ";

let menyapa = function (kondisi_waktu) {
  return `Selamat ${kondisi_waktu}, `; // template literal
};
console.log(menyapa("pagi"));
menyapa = function (kondisi_waktu) {
  return "Halo, Selamat " + kondisi_waktu + ", "; // string concatenation
};
console.log(menyapa("sore"));
console.log(menyapa("malam"));

const makananFavorit1 = "Nasi Goreng";
const makananFavorit2 = "Tahu Balado";
const makananFavorit3 = "Tahu Sumedang";

const makananFavorit = ["Nasi Goreng", "Tahu Balado", "Tahu Sumedang"];
// bukan reinisialiasi, tapi mengubah isi array
makananFavorit[0] = "Mie Goreng"; 
console.log(makananFavorit[0]);

let name = "Fauzi";
let umur = 20;
let pekerjaan = "Mahasiswa";

const biodata = {
  name: "Fauzi",
  umur: 20,
  pekerjaan: "Mahasiswa"
};
biodata.name = "Elon Musk";
console.log(biodata.name);