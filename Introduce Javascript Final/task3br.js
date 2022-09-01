function fazzFood(harga, voucher, jarak, pajak) {
  let potongan = 0;
  let ongkir = 0;
  let pungli = 0;
  let total = 0;
  if (harga >= 50000 && voucher == "FAZZFOOD50") {
    potongan = harga * 0.5;
    if (potongan <= 50000) {
      potongan;
    } else {
      potongan = 50000;
    }
  } else if (harga >= 25000 && voucher == "DITRAKTIR60") {
    potongan = harga * 0.6;
    if (potongan <= 25000) {
      potongan;
    } else {
      potongan = 25000;
    }
  } else {
    potongan;
  }
  if (jarak <= 2) {
    ongkir = 5000;
  } else {
    ongkir = 5000 + (jarak - 2) * 3000;
  }
  if (pajak == true) {
    pungli = harga * 0.05;
  } else {
    pungli = 0;
  }
  total = potongan + ongkir + pungli;
  console.log("harga= " + harga);
  console.log("potongan=" + potongan);
  console.log("biayaantar=" + ongkir);
  console.log("pajak=" + pungli);
  console.log("Subtotal=" + total);
}
fazzFood(75000, "DITRAKTIR60", 5, true);
