let n = "5"; //memasukan jumlah kolom
if (n == "") {
    console.log("n tidak boleh kosong"); // validasi n
  } else if (isNaN(n)){
    console.log("n harus diisi dengan angka")
  }
let string = "";// definisi nilai kosong

for(let i = 0; i < n; i++) { // perulangan external
  for(let j = 0; j < n; j++) { // perulangan internal
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // menampilkan nilai
  string += "\n";
}
// cetak hasil
console.log(string);

// // if(isNaN(num1)){
// // 	document.write(num1 + " is not a number <br/>");
// //  }else{
// // 	document.write(num1 + " is a number <br/>");
//  }