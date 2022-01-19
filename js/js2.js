// const str = "bhimanijenil1234567890jenil@gmail.com";
// const [word, digits,word1] = str.split(/(?=\d)(?<=\D)(?=\d)/);

// console.log(word);    
// console.log(digits);  
// console.log(word1);   
var st = 'bhimanijenil1234567890bhimanijenil@gmail.com';
var regex = new RegExp('([0-9]+)|([a-zA-Z]+)', 'g');
var splittedArray = st.match(regex);

var num = splittedArray[0];
var text = splittedArray[1];