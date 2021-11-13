//Ex2.1 - Sum of lowest numbers
const numbers1 = [10, 343445353, 3453445, 3453545353453]
const numbers2 = [19, 5, 42, 2, 77, -2, 1.22];
sumOfLowest = (arr) => {
    let number = arr.sort(function (a, b) {
        return a - b;
    });
    const noFloatAllowed = [];
    for (let i=0; i<number.length; i++){
        if (number[i] > 0 && number[i] % 1 === 0){
        noFloatAllowed.push(number[i]) 
        };  
    };
    let sum = noFloatAllowed[0] + noFloatAllowed [1];
    console.log(sum)
}
sumOfLowest(numbers2)