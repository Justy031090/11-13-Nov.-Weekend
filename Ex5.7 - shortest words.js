// Ex5.7 - shortest words

let test = "Let's find the length of the shortest word in this string"
shortLength = (word) =>{
    word = word.split(' ');
    for (let i=0; i<word.length; i++){
        word[i] = word[i].length
        word = word.sort((a,b) => a-b);
    } return word[0]
}
shortLength(test)