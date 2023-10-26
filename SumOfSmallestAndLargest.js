// 2. Return the sum of smallest and largest number in an array
// Example: [45, 2, 25, 11, 16]
// Here the output will be 2(smallest) + 45 (largest)
// Output will be 47

function findSumOfSmallestAndLargestInArray(inputArray){
    
	if (!Array.isArray(inputArray) || inputArray.length==0){
        console.error("Invalid array");
        return false;
    }

     
    inputArray.sort((a,b)=>(a-b));
    
    let newArray = inputArray.filter(element => typeof element=='number')
    let result = newArray[0] + newArray[newArray.length-1];
    
    return result;
}

const inputArray = [45, 2, 25, 11, 16, 0] ;

console.log(findSumOfSmallestAndLargestInArray(inputArray));
// console.log(findSumOfSmallestAndLargestInArray([]));
// console.log(findSumOfSmallestAndLargestInArray([1,9]));
// console.log(findSumOfSmallestAndLargestInArray([12.5,7, -2, 10,  12,  9, 0, 'a', true, false,
// {name:"bala"}]))

























