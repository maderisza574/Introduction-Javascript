
function gantivocal(str){
   let changevocal = ''
   let len  = str.length 
   for(let i = 0; i < len ; i++ ){
    if (str[i] == 'a' ){
        changevocal += 'o'
    } else{
        changevocal += str[i]
    }
}
console.log(changevocal)
}
gantivocal('jaka')

// function gantivokal (str){
//     let masukan = str.replace(/[a]/gi, 'o')
//     console.log(masukan)
// }
// gantivokal('jakarta');

