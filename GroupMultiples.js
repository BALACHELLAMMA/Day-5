// 5. Group multiples from 1 to 10
// const arr1 = [34, 12, 10, 15, 7, 21, 81]
// Output = [{1: [34, 12, 10, 15, 7, 21, 81]}, 
// { 2: [34, 12, 10]}, {3: [12, 15, 21, 81] }


function groupMultiples(inputArray){

    if (!Array.isArray(inputArray) || inputArray.length==0){
        console.error("Invalid array");
        return false;
    }
    
    //remove if it is not a type of 'number'
    let newArray = inputArray.filter(element => typeof element=='number');

    let result = {};
    
    for (let index = 1; index <= 10; index++) {
       result[index] = newArray.filter(element => element % index === 0);
    }
    
    return result;
}

let inputArray = [34,12,10,15,7,21,81];

console.log(groupMultiples(inputArray));
// console.log(groupMultiples([]));
// console.log(groupMultiples([1]));
// console.log(groupMultiples('hello'));
// console.log(groupMultiples(false));
// console.log(groupMultiples(-1));

// console.log(groupMultiples([12.5,7, -2, 10,  12,  9, 0, 'a', true, false,
// {name:"bala"}]))
