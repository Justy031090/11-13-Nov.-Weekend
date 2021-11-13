// Ex2.6 - Years and Centuries

whatCentury = (year) => {
    if (year <= 100){
        return 1;
    }
    else if (year < 1000 ){
        return parseInt(year / 100) +1;
    }
    else if (year >= 1000 && year % 100 === 0) {
        return parseInt(year/100);
    }
    else {
        return parseInt(year / 100) +1;
    }
}
// why not..
whatCentury2 = (year2) =>{
    return Math.ceil(year2/100);
}
console.log(whatCentury(1905))
console.log(whatCentury2(1905))
