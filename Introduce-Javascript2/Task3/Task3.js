// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2
// const filteredArray = angka.filter(item => item % 2 === 0);

// console.log(filteredArray) // Output: [2, 4, 6, 8]
function mencarinilai (nilaiawal,nilaiakhir,dataArray){
    // let nilaijadi = []
    if (nilaiawal > nilaiakhir){
        console.log("nilai akhir harus lebih besar")
    } else if(dataArray.length < 5){
      console.log("data harus lebih dari 5")
    }else if (nilaiawal < nilaiakhir && dataArray.length > 5){
        dataArray.sort(function(a, b){return a-b});
        let nilaijadi = []
    for(let i = 0 ; i < dataArray.length ; i++){
        if (dataArray[i] > nilaiawal && dataArray[i] < nilaiakhir ){
         nilaijadi.push(dataArray[i])
        }  
    }
    if(nilaijadi.length==0){
        console.log("Nilai Tidak ditemukan")
    } else {
        console.log(nilaijadi) 
    }
}
}
mencarinilai(5, 17 , [2, 25, 4, 1, 30, 18]);


// function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
//     if (nilaiAwal > nilaiAkhir){
//       console.log("nilai akhir haris lebih besar")
//     } else if(dataArray.length < 5){
//       console.log("data harus lebih dari 5")
//     }else if (nilaiAwal < nilaiAkhir && dataArray.length > 5){
//       dataArray.sort(function(a, b){return a-b});
//     }
//   }