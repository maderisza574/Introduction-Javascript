//Program fazzfood
function fazzfood(harga,voucher,jarak,pajak){
    if(harga >= 50000 && voucher == 'FAZZFOOD50'){ // if pertama medeeksi harga dan voucher
        if(pajak == true){ // if kedua mendeteksi pajak
        if (jarak <= 2){ // if ketiga medeteksi jarak
            hrgongkir = 5000;
            potongan = harga*0.5;
            if(potongan <= 50000){ // if keempat mendeteksi potongan
                pajak = harga*0.05;
                total = potongan + hrgongkir +pajak;
                console.log("harga= " + harga)
                console.log("potongan=" +potongan)
                console.log("biayaantar=" +hrgongkir)
                console.log("pajak=" +pajak)
                console.log("Subtotal=" +total)
            } else {
                potongan = 50000
                pajak = harga*0.05;
                total = potongan + hrgongkir +pajak;
                console.log("harga= " + harga)
                console.log("potongan=" +potongan)
                console.log("biayaantar=" +hrgongkir)
                console.log("pajak=" +pajak)
                console.log("Subtotal=" +total)
            }
       } else {
            potongan = harga*0.5;
           hrgongkir = 5000 + ((jarak - 2) * 3000);
           if(potongan <= 50000){
            pajak = harga*0.05;
            total = potongan + hrgongkir +pajak;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
        } else {
            potongan = 50000
            pajak = harga*0.05;
            total = potongan + hrgongkir +pajak;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
        }
           
       }
    } else{
        if (jarak <= 2){
            hrgongkir = 5000;
            potongan = harga*0.5;
            pajak = harga*0.05;
            total = potongan + hrgongkir +pajak;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else {
           hrgongkir = 5000 + ((jarak - 2) * 3000);
           potongan = harga*0.5;
           pajak = harga*0.05;
           total = potongan + hrgongkir +pajak;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
           
       }
    }
    } else if (harga >= 25000 && voucher =='DITRAKTIR60'){ // sama kya sbeleum nya namun beda kondisi
        if(pajak == true){
        if (jarak <= 2){
            hrgongkir = 5000;
            potongan = harga*0.6;
            if(potongan <= 25000){
            pajak = harga*0.05;
            total = potongan + hrgongkir +pajak;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else {
           hrgongkir = 5000 + ((jarak - 2) * 3000);
           potongan = 25000;
           pajak = harga*0.05;
           total = potongan + hrgongkir +pajak;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
           
       }
    } else{
        if (jarak >= 2){
            hrgongkir = 5000;
            potongan = harga*0.6;
            if(potongan <= 25000){
            pajak = harga*0.05;
            total = potongan + hrgongkir +pajak;
            console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
       } else {
           hrgongkir = 5000 + ((jarak - 2) * 3000);
           potongan = 30000;
           pajak = harga*0.05;
           total = potongan + hrgongkir +pajak;
           console.log("harga= " + harga)
            console.log("potongan=" +potongan)
            console.log("biayaantar=" +hrgongkir)
            console.log("pajak=" +pajak)
            console.log("Subtotal=" +total)
           
       }
    }
    }
    }
}
}
    
    
    fazzfood(26000, 'DITRAKTIR60',5, true);
// input harga voucher,jarak, dan pajak
// if pertama mendeteksi harga dan voucher
// if kedua mendeteksi pajak
// if ketiga mendeteksi jarak
// if keempat mendeteksi maksimal potongan

