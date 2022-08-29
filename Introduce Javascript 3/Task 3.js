//  const item = {
//   alas: 9, 
//   tinggi: 9
//  }

  
//   function luassegitiga(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         if(item.alas > 0 && item.tinggi > 0){
//           let luas = (1/2 * item.alas * item.tinggi)
//           resolve(luas)
//         }else{
//           reject(new Error('Gagal Mencari Luas'))
//         }
//       },3000)
//     })
//   }
// luassegitiga().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});
// // program to convert celsius to fahrenheit
//
function celciusToFahrenhit (celcius){
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      if(typeof celcius == 'number'){
        const fahrenheit = (celcius * 1.8) + 32
        resolve(fahrenheit)
      }else{
        reject(new Error('Gagal konversi'))
      }
    },3000)
  })
}
celciusToFahrenhit(30).then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})
// const celsius = prompt("Enter a celsius value: ");

// // calculate fahrenheit

// // display the result
// console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);