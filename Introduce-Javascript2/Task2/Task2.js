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
    var patients = [
        "Abigail", "Alexandra", "Alison",
        "Amanda", "Angela", "Bella",
        "Carol", "Caroline", "Carolyn",
        "Deirdre", "Diana", "Elizabeth",
        "Ella", "Faith", "Olivia", "Penelope"
    ]
    callback(str,limit,patients)
}
function searchname(input, size, patients){
    var patients = [
            "Abigail", "Alexandra", "Alison",
            "Amanda", "Angela", "Bella",
            "Carol", "Caroline", "Carolyn",
            "Deirdre", "Diana", "Elizabeth",
            "Ella", "Faith", "Olivia", "Penelope"
        ]
        // var input = "ab";
        var re = new RegExp(input+'.+$', 'i'); // regexp untuk: digunakan untuk melakukan fungsi  pencarian ganti pencocokan pola pada teks 
        patients = patients.filter(function(e, i, a){  //+$ memperbolehkan huruf besa, huruf kecil,angka
            return e.search(re) != -1; // menuliskan kembali ke dalam string                  // menentukan kecocokan huruf besar huruf kecil
        });
        // hasil(limit)
        console.log(patients.slice(0,size));
}
// function hasil(size){
//     console.log(patients.slice(0,size));
// }
masukan("an",3,searchname);
