var hashFuction = function hashFuction(key) {
    return key.charCodeAt(0);
}
var put = function put(arr, key, value) {
    let bucket = hashFuction(key) % arr.length;
    for (let i = 0; i < arr.length; i++) {
        let index = bucket%arr.length;
        if (!arr[index]) {
            arr[index] = {k: key, v: value}
            return true;
        }
        bucket++
    }
    return false;
}

var get = function get(arr, key) {
    let bucket = hashFuction(key) % arr.length;
    for (let i = 0; i < arr.length; i++) {
        let index = bucket%arr.length;
        let element = arr[index]
        if (!element || element.k == key) {
            return element ? element.v : null;
        }
        bucket++
    }
    return null;
}


let exampleHash = new Array(40)


put(exampleHash, 'abc', 'value 1')
put(exampleHash, 'abb', 'value 2')

console.log(exampleHash)
console.log(get(exampleHash,'abb'))