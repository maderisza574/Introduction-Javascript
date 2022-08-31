// program untuk check kalimat palidorm

function checkPalindrom(kata) {
    const len = kata.length -1;
    newkata = ''
    if (len >= 2 ){
        
        for (let i = len; i >= 0 ; i--) {
            newkata += kata [i]
        }
          if (newkata == kata) {
            console.log('palidorm')
        } else{
            console.log('bukan palidorm')
        }

    } else{
        console.log('huruf kurang dari lima')
    }
    
}

// function checkPalindrome(str) {
//     return str == str.split('').reverse().join('');
//   }

checkPalindrom('malam')

// take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);