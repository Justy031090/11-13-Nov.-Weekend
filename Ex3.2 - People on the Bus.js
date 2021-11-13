// Ex3.2 - People on the Bus

let arr = [[10,0], [5, 4], [3, 7], [3, 4], [0, 3]];
onBus = (busStops) => {
    let total = 0;
    for (let i = 0; i<busStops.length; i++){
        let gotOn = busStops[i][0]
        let gotOff = busStops[i][1];
        total += gotOn;
        total -= gotOff;
    } return total;
}
onBus(arr)
//console.log(onBus(arr))

