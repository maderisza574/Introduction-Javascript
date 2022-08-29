const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = [ 'senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) => {
                 return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari libur'))
            }
        },3000)
    })
    
}
// let day1 = 'senin'
// cekHariKerja(day1).then((result) => {console.log(result)}).catch((error) => {console.log(error)});
// cekHariKerja
//     .then((result)=>{console.log(result)});
//     .catch((error)=>{console.log(error)});
async function cekHari(day1) {
    try {
    const resultday1 = await cekHariKerja(day1);
    console.log(resultday1+ ' adalah hari kerja')
    } catch (error) {
      console.log(error);
    }
  }
  cekHari('senin')

  // Then menggunakan fungsi didalam kurun menggunakan promise dimana promise ada resolve reject
  // Try menggunakan fungsi async await, dalam async await ada fungsi try dan catch