//Ex2.4 - Unique

const arr1 = [ 1, 1, 1, 2, 1, 1 ];
const arr2 = [ 0, 0, 0.55, 0, 0 ];
findUniq = (arr) =>{
    let sorted = arr.sort(function (a, b) {
        return a -b ;
    });
    return sorted[0] !== sorted[1] ? sorted[0] : sorted.at(-1);
}
findUniq(arr2)
//!console.log(findUniq(arr2))