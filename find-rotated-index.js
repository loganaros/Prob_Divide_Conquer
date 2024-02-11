function findRotatedIndex(arr, num) {
    let pivot = findPivot(arr);
    if (pivot > 0 && arr[pivot - 1] >= num && num >= arr[0]) {
        return search(arr, num, 0, pivot - 1);
    } else {
        return search(arr, num, pivot, arr.length - 1);
    }
}

function search(arr, num, start, end) {
    if(num < arr[start] || num > arr[end]) return -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] == num) {
            return mid;
        } else if (arr[mid] > num) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
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

module.exports = findRotatedIndex