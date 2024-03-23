function mergeSort(inputArray){
    if(inputArray.length == 1){
        return inputArray;
    }
    const halfIndex = Math.round((inputArray.length)/ 2);
    const leftHalf = inputArray.slice(0, halfIndex);
    const rightHalf = inputArray.slice(halfIndex, inputArray.length);

    let leftSorted = mergeSort(leftHalf);
    let rightSorted = mergeSort(rightHalf);

    let final = [];
    while(leftSorted.length > 0 || rightSorted.length > 0){
        if (leftSorted[0] < rightSorted[0] || rightSorted.length < 1) {
            final.push(leftSorted[0]);
            leftSorted.shift();
        }
        else{
            final.push(rightSorted[0]);
            rightSorted.shift();
        }
    }
    return final;
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([87, 23, 56, 92, 14, 67, 31, 55, 78, 42, 69, 17, 81, 39, 52, 98, 25, 73, 10, 47, 63, 29, 84, 37, 61, 45, 19, 72, 95, 28, 64, 82, 34, 50, 76, 21, 93, 58, 16, 68, 35, 88, 41, 74, 27, 91, 59, 12, 49, 85, 38, 66, 32, 79, 26, 62, 46, 18, 71, 97, 24, 57, 83, 15, 70, 36, 89, 48, 94, 22, 65, 33, 77, 51, 96, 13, 54, 44, 90, 30, 75, 20, 53, 40, 86, 11, 60, 43, 80]));