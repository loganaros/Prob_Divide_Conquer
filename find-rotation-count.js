function findRotationCount(arr) {
    return findPivot(arr);
}

function findPivot(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if (arr[min] <= arr[mid]) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
}

module.exports = findRotationCount