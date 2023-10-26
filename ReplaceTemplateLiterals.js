// 3. Template String Replace
// For example:
// const string = “Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]“;
// replaceTemplateString(string, [[“location”, “Chennai”], [“state”, “Tamil Nadu”], [“phone”, “9840164723"]])
// Output: Numentica is a company focused on delivering high quality code. It is located in Chennai Tamil Nadu 9840164723


function replaceTemplateString(inputString, replacementArray) {

    if (typeof inputString!=='string' || !inputString){
        console.error("Invalid string");
        return false;
    }

    if (!Array.isArray(replacementArray) || replacementArray.length==0){
        console.error("Invalid replacement array");
        return false;
    }
     
    
    for (const [placeholder, value] of replacementArray) {
    
        const placeholderRegex = new RegExp(`#\\[${placeholder}\\]`, 'g');
    
      inputString = inputString.replace(placeholderRegex, value);
    }
    return inputString;
  }
  
const inputString = "Numentica is a company focused on delivering high quality code. It is located in #[location] #[state] #[phone]";
const replacements = [["location", "Chennai"], ["state", "Tamil Nadu"], ["phone", "9840164723"]];

// console.log(replaceTemplateString(inputString,replacements));

// console.log(replaceTemplateString(inputString,[["location", "Chennai"]]))
// console.log(replaceTemplateString(inputString,[["state", "Tamil Nadu"]]))
// console.log(replaceTemplateString(inputString,[["phone", "9840164723"]]))


// console.log(replaceTemplateString([],replacements));
// console.log(replaceTemplateString('',replacements));
// console.log(replaceTemplateString(inputString,[]));
// console.log(replaceTemplateString(inputString,"location,chennai"));
// console.log(replaceTemplateString(inputString,true));
// console.log(replaceTemplateString(inputString,false));
// console.log(replaceTemplateString(inputString,5.6));
// console.log(replaceTemplateString(inputString,["state", "Tamil Nadu"]))//1D not works



  