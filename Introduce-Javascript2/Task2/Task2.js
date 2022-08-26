// var patients = [
//     "Abigail", "Alexandra", "Alison",
//     "Amanda", "Angela", "Bella",
//     "Carol", "Caroline", "Carolyn",
//     "Deirdre", "Diana", "Elizabeth",
//     "Ella", "Faith", "Olivia", "Penelope"
// ]
    
// var input = "an";
// var re = new RegExp(input+'.*$', 'i');
// var limit = 
// patients = patients.filter(function(e, i, a){
//     // const result = words.filter(word => word.length > 6);
//     return e.search(re) != -1;
// });
// console.log(patients.slice(0,3));
function masukan(str,limit,callback){
    let patients = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]
    callback(str,limit,patients) // untuk memanggil fungsi search name (penghubung func masukan)
}
function searchname(input, size, data){
    // var patients = [
    //         "Abigail", "Alexandra", "Alison",
    //         "Amanda", "Angela", "Bella",
    //         "Carol", "Caroline", "Carolyn",
    //         "Deirdre", "Diana", "Elizabeth",
    //         "Ella", "Faith", "Olivia", "Penelope"
    //     ]
        // var input = "ab";
        let re = new RegExp(input+'.+$', 'i'); // regexp untuk: digunakan untuk melakukan fungsi  pencarian ganti pencocokan pola pada teks 
        data = data.filter(function(e, i, a){  //+$ memperbolehkan huruf besa, huruf kecil,angka
            return e.search(re) != -1; // menuliskan kembali ke dalam string                  // menentukan kecocokan huruf besar huruf kecil
        });
        // hasil(limit)
        console.log(data.slice(0,size));
}
// function hasil(size){
//     console.log(patients.slice(0,size));
// }
masukan("an",3,searchname);
