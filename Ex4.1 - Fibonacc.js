// Ex4.1 - Fibonacci

fiboSeq = (n) =>{
    return n <= 1 ? n : fiboSeq(n - 1) + fiboSeq (n -2)
}
fiboSeq(10);