function menyapa1([kondisi_waktu, nama, alamat]) {
    return `selamat ${kondisi_waktu}, ${nama}! Semoga harimu menyenangkan!`;
}

function menyapa2({kondisi_waktu, nama, alamat}) {
    return `selamat ${kondisi_waktu}, ${nama}! Semoga harimu menyenangkan!`;
}

console.log(menyapa1(["pagi", null, "Jakarta"])); // Output: selamat pagi, Budi! Semoga harimu menyenangkan!
const param = {nama: "Elon", kondisi_waktu: "pagi", alamat: "California"};
console.log(menyapa2(param)); // Output: selamat pagi, Elon! Semoga harimu menyenangkan!

