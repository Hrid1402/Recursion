function fibs(num){
    if(num < 0){
        return [];
    }
    else if(num == 1){
        return [0]
    }
    actualNumber = 1;
    fibArray = [0, 1];
    for(let i = 0; i < num-2; i++){
        fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);   
    }
    return fibArray;
}
console.log(fibs(8)); //[0, 1, 1, 2, 3, 5, 8, 13]

function fibsRec(num, fibArray = [0, 1]){
    if(num == 1){
        return [0];
    }
    else if(num == 0){
        return [];
    }
    else if(num - 2 < 1){
        return fibArray;
    }
    else{
        fibArray.push(fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]);
        return fibsRec(num - 1, fibArray)
    }
}

console.log(fibsRec(8)); //[0, 1, 1, 2, 3, 5, 8, 13]



