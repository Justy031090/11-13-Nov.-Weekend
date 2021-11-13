// Ex5.8 - shortest words version 2

longestWord = (word) =>{
    word = word.split(' ');
    let longest = [];
    for (let i=0 ; i<word.length; i++) {
        word = word.sort((a,b) => b.length-a.length);
        if(word[0].length === word[i].length){
            longest.push(word[i])
        }
    }return longest.filter((value,index) => longest.indexOf(value) === index).join (' ')
} ;
longestWord('The longest word in the string is --- longest')