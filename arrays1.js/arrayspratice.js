const solution = (arr, val, i=0) => {
    if (i === arr.length) {
        return arr
    }
    if (arr[i] === val) {
        arr[i] = 0
    }
    solution(arr, val, i + 1)
}
