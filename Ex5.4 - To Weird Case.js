// Ex5.4 - To Weird Case

toWeirdCase = (str) =>{
    newStr =  str.toLowerCase().split(' ')
    for (let i=0; i<newStr.length; i++){
        newStr[i] = newStr[i].split('')
        for (let j=0; j<newStr[i].length; j++){
        if (j % 2 == 0) {
            newStr[i][j] = newStr[i][j].toUpperCase()
        }
    } 
    newStr[i] = newStr[i].join('')
} 
return newStr = newStr.join(' ')
}
toWeirdCase("Weird string case")