// Ex4.2 - Tribonacci -
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]   //! [1,1,1]
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...] //! [0,0,1]
let sig1 = [1,1,1];
let sig2 = [0,0,1];
tribSeq = (signature,n) => {
    let trib = signature; 
    for (i = 3; i < n; i++) { 
        trib.push((trib[i-1] + trib[i-2] + trib[i-3])); 
    }
    return trib.slice(0 ,n); 
}
tribSeq(sig1, 5)