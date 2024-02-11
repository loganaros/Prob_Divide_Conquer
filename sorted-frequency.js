function sortedFrequency(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    let firstIndex = findFirst(arr, val, min, max);
    let lastIndex = findLast(arr, val, min, max);
    return (firstIndex == -1) ? -1 : lastIndex - firstIndex + 1;
}

function findFirst(arr, num, min = 0, max = arr.length - 1) {
    if(min <= max) {
        let mid = Math.floor((min + max) / 2);
        if((mid == 0 || arr[mid - 1] != num) && arr[mid] == num) {
            return mid;
        } else if(num > arr[mid]) {
            return findFirst(arr, num, min + 1, max);
        } else {
            return findFirst(arr, num, min, max - 1);
        }
    }
    return -1;
}

function findLast(arr, num, min = 0, max = arr.length - 1) {
    if(min <= max) {
        let mid = Math.floor((min + max) / 2);
        console.log(mid, min, max);
        if((mid == arr.length - 1 || num < arr[mid + 1]) && arr[mid] == num) {
            return mid;
        } else if(num < arr[mid]) {
            return findLast(arr, num, min, max - 1);
        } else {
            return findLast(arr, num, min + 1, max);
        }
    }
    return -1;
}

module.exports = sortedFrequency