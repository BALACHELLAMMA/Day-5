// 4. Encoder and Decoder
// Encode a string in such a way that the output will be the next characters given as input
// For example:
// encode(“arun”, 2)  -> ctwp
// encode(“arun”, 4) -> evyr
// And similarly decode will return the opposite
// decode(“ctwp”, 2) -> arun
// decode(“evyr”, 4) -> arun

// function encode(inputString,shiftingCount){
    
//     if ( typeof inputString!=='string' || !inputString ) {
//         console.error("Invalid string");
//         return false;
//     }

//     if( typeof shiftingCount!='number') {
//         console.error('Invalid shifting Count');
//         return false;
//     }

//     //shifitingCount is zero , then return the same inputArray
//     if(shiftingCount<=0) {
//         console.error("Enter valid shifting count")
//         return false;
//     }
//     else if((shiftingCount - Math.floor(shiftingCount)) !== 0){
//         console.error("floating numbers not accepted");
//         return false;
//     }

//     let result='';
    

//     for (let index = 0; index < inputString.length; index++){
         
//         //string character into ASCII
//         let currentCharacterASCII = inputString.codePointAt(index);
        
//         let shiftIndex;

//          //lowercase alphabet check
//          if (currentCharacterASCII>=97 && currentCharacterASCII<=122 ) {
//             shiftIndex = currentCharacterASCII + shiftingCount;
            
//             //only include alphabets
//             if( !(shiftIndex>=97) || !(shiftIndex<=122) ) {
//                 shiftIndex = currentCharacterASCII;
//             }
          
//           } 
//           else if(currentCharacterASCII>=65 && currentCharacterASCII<=90) { 
//             //Uppercase alphabet check
//             shiftIndex = currentCharacterASCII + shiftingCount;
            
//             //only include alphabets
//             if( !(shiftIndex>=65) || !(shiftIndex<=90) ) {
//                 shiftIndex = currentCharacterASCII;
//             }
//           }
//         else{
//             shiftIndex = currentCharacterASCII;
//         }
//         //ASCII to string and store
//         result+=(String.fromCharCode(shiftIndex));
//     }

//     return result;
// }

// function decode(inputString,shiftingCount){
    
//     if ( typeof inputString!=='string' || !inputString ) {
//         console.error("Invalid string");
//         return false;
//     }

//     if( typeof shiftingCount!='number') {
//         console.error('Invalid shifting Count');
//         return false;
//     }

//     //shifitingCount is zero , then return the same inputArray
//     if(shiftingCount<=0) {
//         console.error("Enter valid shifting count")
//         return false;
//     }
//     else if((shiftingCount - Math.floor(shiftingCount)) !== 0){
//         console.error("floating numbers not accepted");
//         return false;
//     }

//     let result='';
//     // inputString= inputString.toLowerCase();


//     for (let index = 0; index < inputString.length; index++){
         
//         //string character into ASCII
//         let currentCharacterASCII = inputString.codePointAt(index);

//         let shiftIndex;

//         //lowercase alphabet check
//         if (currentCharacterASCII>=97 && currentCharacterASCII<=122 ) {
//           shiftIndex = currentCharacterASCII - shiftingCount;
          
//           //only include alphabets
//           if( !(shiftIndex>=97) || !(shiftIndex<=122) ) {
//               shiftIndex = currentCharacterASCII;
//           }
        
//         } 
//         else if(currentCharacterASCII>=65 && currentCharacterASCII<=90) { 
//           //Uppercase alphabet check
//           shiftIndex = currentCharacterASCII - shiftingCount;
          
//           //only include alphabets
//           if( !(shiftIndex>=65) || !(shiftIndex<=90) ) {
//               shiftIndex = currentCharacterASCII;
//           }
//         }
//         else{
//             shiftIndex = currentCharacterASCII;
//         }
        
//         //ASCII to string and store
//         result+=(String.fromCharCode(shiftIndex));
//     }
    
//     return result;
// }

function encode(input, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let encoded = '';
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const index = alphabet.indexOf(char.toLowerCase());
        const newIndex = (index + shift) % alphabet.length;
        const newChar = isUpperCase
          ? alphabet[newIndex].toUpperCase()
          : alphabet[newIndex];
        encoded += newChar;
      } else {
        encoded += char;
      }
    }
  
    return encoded;
  }
  
  function decode(encoded, shift) {
    return encode(encoded, -shift);
  }
  
         

// console.log(encode("arun",28));
// console.log(encode("arun", 4));
// console.log(decode("ctwp",2));
// console.log(decode("evyr", 4));


console.log(encode("zara",2));
// console.log(encode("yalini",2));
// console.log(decode("anu",2));
// console.log(decode("Aara",2));
// console.log(encode("Riya",2));
// console.log(decode("arokiya",4));

// console.log(encode("a1mirtha",2)); //string consists any numbers or symbols
// console.log(decode("a#mirtha",2));


// console.log(encode("arun",0));
// console.log(encode("arun",-1));
// console.log(encode("arun",4.5));
// console.log(encode("arun",true));
// console.log(encode("arun","hello"));
// console.log(encode("",2));
// console.log(encode(true,2));
// console.log(encode(1,2));
// console.log(encode('a',2));

// ========= encode or decode as "boolean"
// function encodeOrDecodeString(inputString,shiftingCount,isEncode){
//     if (typeof isEncode!=='boolean') {
//         console.error("Invalid..! enter 'true' to encode/'false' to decode")
//     }

//     if(isEncode) return encode(inputString,shiftingCount);
//     else return decode(inputString,shiftingCount);
// }

// console.log(encodeOrDecodeString("arun",2,true));
// console.log(encodeOrDecodeString("arun",4,true));
// console.log(encodeOrDecodeString("ctwp",2,false));
// console.log(encodeOrDecodeString("evyr",4,false));

// ========= encode or decode as "string"
// function encodeOrDecodeString(inputString,shiftingCount,encodeOrDecode) {

//         if (typeof encodeOrDecode!=='string' || !encodeOrDecode) {
//             console.error("Invalid input for encodeOrDecode..!");
//             return false;
//         }
    
        
//         if (encodeOrDecode.toLowerCase()=='encode') 
//            return encode(inputString,shiftingCount);
//         else if(encodeOrDecode.toLowerCase()=='decode') 
//            return decode(inputString,shiftingCount);
//         else if(encodeOrDecode.toLowerCase()!=='encode' || encodeOrDecode.toLowerCase()!=='decode')
//         {
//             console.error("Invalid input for encodeOrDecode..!");
//             return false; 
//         }
// }
    
// console.log(encodeOrDecodeString("arun",2,"encode"));
// console.log(encodeOrDecodeString("arun",4,"encode"));
// console.log(encodeOrDecodeString("ctwp",2,"decode"));
// console.log(encodeOrDecodeString("evyr",4,"decode"));

// console.log(encodeOrDecodeString("evyr",4,""));
// console.log(encodeOrDecodeString("evyr",4,true));
// console.log(encodeOrDecodeString("evyr",4,false));
// console.log(encodeOrDecodeString("evyr",4,"hello"));
// console.log(encodeOrDecodeString("arun",2,4.5));





