// 1. Find the missing number / numbers
// Example: Given an array of numbers in random order, find the missing numbers
// [7, 10, 12, 9] // output [8, 11] since these are the numbers missing in 7, 9, 10, 12
// Note: The numbers will be given as input in any order.

function findMissingNumberInArray(inputArray){

	if (!Array.isArray(inputArray) || !(inputArray.length>=2)){
	   console.error("Invalid type or length of the array");
       return false;
	}

    inputArray.sort((a,b)=>(a-b));
    
	let missingNumbersArray = [];

	//remove boolean values 
	let newArray = inputArray.filter(element => typeof element=='number')

    
	//initially , difference will have first element
	let difference = newArray[0] - 0;

    for (let index=0; index<newArray.length; index++)
	{  
		// console.count('loop');
        // if (typeof newArray[index]!=='number') continue;

		if (newArray[index] - index != difference)
		{
            //find missing numbers between difference and (current element - currentIndex)
		while (difference < newArray[index] - index)
			{
				// console.count('loop');
				// console.log((index + difference) + " ");
                let missingElement = index+difference;
                missingNumbersArray.push(missingElement)
				difference++;
			}
		}
	}
    
    return missingNumbersArray;
}


let inputArray = [7, 10, 12, 9, -20];
// console.log(findMissingNumberInArray(inputArray));

console.log(findMissingNumberInArray(inputArray));  // [] empty array
// console.log(findMissingNumberInArray([1])); //length should be >= 2
// console.log(findMissingNumberInArray(''));  //string  
// console.log(findMissingNumberInArray("numberArray"));
// console.log(findMissingNumberInArray(true)); //boolean
// console.log(findMissingNumberInArray(-1)); //number
// console.log(findMissingNumberInArray(1));
// console.log(findMissingNumberInArray(0));

// console.log(findMissingNumberInArray([7, -2, 10,  12,  9, 0, 'a', true, false, {name:"bala"}, ()=>{console.log("Hello")}]))




