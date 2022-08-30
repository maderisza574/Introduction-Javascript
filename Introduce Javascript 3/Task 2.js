const getMonth = (callback) =>{
    setTimeout(() => {
        let error = true
        let month = ['Januari','Februari','Maret','April',
        'Mei','Juni','Juli','Agustus','September',
        'Oktober','November','Desember']
    if (!error){
        callback(null,month)
    } else{
        callback(new Error('Sorry Data Not Found'),[])
    }
    },4000)
}
 function showMonth (kosong,arrayMonth) {
    if(arrayMonth.length > 0){
        const list = arrayMonth.map(result => console.log(result))

    } else{
        console.log(kosong)   
    }
    // console.log(kosong)
    // const newmonth = arrayMonth.map((element)=>{console.log(element)}) 
 }
getMonth(showMonth)