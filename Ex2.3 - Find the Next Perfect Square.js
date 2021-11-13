//Ex2.3 - Find the Next Perfect Square

let findNextSquare = (perfectSquare) =>{
    return Math.sqrt(perfectSquare) % 1 === 0 ? Math.pow(Math.sqrt(perfectSquare)+1,2) : -1
};
findNextSquare()
//console.log(findNextSquare(625))