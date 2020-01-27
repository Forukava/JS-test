function reduce(arr, func){
    let result = arr[0];
    for (nextElement of arr.slice(1)) {
        result = func(result, nextElement)
    }
    return result; 
}
console.log(reduce([3,4,5,10], (x, y) => {
        if(x>y)
            return x
        else
            return y
}))