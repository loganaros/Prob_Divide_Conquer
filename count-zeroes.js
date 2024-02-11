function countZeroes(arr) {
    let min = 0;
    let max = arr.length - 1;
    let checkIndex;
    while (min <= max) {
        checkIndex = Math.floor((max + min) / 2);
        console.log(checkIndex, min, max);
        if (arr[checkIndex] == 0) {
            if (arr[checkIndex - 1] == 1 || arr[checkIndex - 1] == undefined) {
                break;
            }
            max = checkIndex - 1;
        } else if (arr[checkIndex] == 1) {
            if(arr[checkIndex+1] == undefined) {
                return 0;
            }
            min = checkIndex + 1;
        }
    }
    return arr.length - checkIndex;
}

module.exports = countZeroes