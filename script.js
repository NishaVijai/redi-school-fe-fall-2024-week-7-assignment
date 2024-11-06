console.log("Week 7 - JS - Arrays and array methods - class assignment");

// Arrays and array methods
const displayValueElement = document.querySelector(".display_value");

function displayValueOnAnHTMLElement(message, elementValue) {
  let result = `<p class='display_result'>${message}: <span>${elementValue}</span></p> <br />`;
  return displayValueElement.innerHTML += result;
}

// ----------------------------------------------------------------
// Slide 15/54
// Create an array - assigning array values to a variable
const arrayOfNumbers = [66, 33, 22, 0, 11];
// console.log(`arrayOfNumbers: ${arrayOfNumbers}`);
displayValueOnAnHTMLElement("arrayOfNumbers", arrayOfNumbers);

// Create an array - using Array constructor
const arrayOfMixedValuesUsingArrayConstructor = new Array('testName', 'valueTwo', 44, false, 1);
// console.log(`arrayOfMixedValuesUsingArrayConstructor: ${arrayOfMixedValuesUsingArrayConstructor}`);
displayValueOnAnHTMLElement("arrayOfMixedValuesUsingArrayConstructor", arrayOfMixedValuesUsingArrayConstructor);

// Slide 17/54
// Get an element from an array using its index property
const getThirdElementFromArrayOfNumbers = arrayOfNumbers[2];
// console.log(`getThirdElementFromArrayOfNumbers: ${getThirdElementFromArrayOfNumbers}`);
displayValueOnAnHTMLElement("getThirdElementFromArrayOfNumbers", getThirdElementFromArrayOfNumbers);

// Slide 18/54
// Get last element from an array using length property
const lengthOfArrayOfNumbers = arrayOfNumbers.length;
// console.log(`lengthOfArrayOfNumbers: ${lengthOfArrayOfNumbers}`);
displayValueOnAnHTMLElement("lengthOfArrayOfNumbers", lengthOfArrayOfNumbers);

const getLastElementFromArrayOfNumbers = arrayOfNumbers[lengthOfArrayOfNumbers - 1];
// console.log(`getLastElementFromArrayOfNumbers: ${getLastElementFromArrayOfNumbers}`);
displayValueOnAnHTMLElement("getLastElementFromArrayOfNumbers", getLastElementFromArrayOfNumbers);

// ----------------------------------------------------------------
// Slide 20/54
// Array method - Array.isArray()
const isPassedArgumentAnArray = (arr) => {
  return Array.isArray(arr);
};

const isArrayOfNumbersAnArray = isPassedArgumentAnArray(arrayOfNumbers);
// console.log(`isArrayOfNumbersAnArray: ${isArrayOfNumbersAnArray}`);
displayValueOnAnHTMLElement("isArrayOfNumbersAnArray", isArrayOfNumbersAnArray);

const singleStringVariable = 'testString';
const isSingleStringVariableAnArray = isPassedArgumentAnArray(singleStringVariable);
// console.log(`isSingleStringVariableAnArray: ${isSingleStringVariableAnArray}`);
displayValueOnAnHTMLElement("isSingleStringVariableAnArray", isSingleStringVariableAnArray);

const singleObjectVariable = { 'name': 'Jane' };
const isSingleObjectVariableAnArray = isPassedArgumentAnArray(singleObjectVariable);
// console.log(`isSingleObjectVariableAnArray: ${isSingleObjectVariableAnArray}`);
displayValueOnAnHTMLElement("isSingleObjectVariableAnArray", isSingleObjectVariableAnArray);

const emptyArrayVariable = [];
const isEmptyArrayVariableAnArray = isPassedArgumentAnArray(emptyArrayVariable);
// console.log(`isEmptyArrayVariableAnArray: ${isEmptyArrayVariableAnArray}`);
displayValueOnAnHTMLElement("isEmptyArrayVariableAnArray", isEmptyArrayVariableAnArray);

// ----------------------------------------------------------------
// Slide 21/54
// Exercise - 1:
// - Create an array of colors, this array should have 5 different colors written in type of string
// - Create a mixed array that contains, 2 boolean elements, 2 strings and one number element
// Bonus point → try to use the Array.isArray and length property

const arrayOfColors = ["Coral", "Cyan", "Yellow", "Green", "Blue"];
// console.log(`arrayOfColors: ${arrayOfColors}`);
displayValueOnAnHTMLElement("arrayOfColors", arrayOfColors);

const mixedArray = [true, false, "Name", "Age", 4, 9];
// console.log(`mixedArray: ${mixedArray}`);
displayValueOnAnHTMLElement("mixedArray", mixedArray);

const lengthOfAnArray = (arr) => {
  return arr.length;
};

const isArrayOfColorsAnArray = isPassedArgumentAnArray(arrayOfColors);
// console.log(`isArrayOfColorsAnArray: ${isArrayOfColorsAnArray}`);
displayValueOnAnHTMLElement("isArrayOfColorsAnArray", isArrayOfColorsAnArray);

const isMixedArrayAnArray = isPassedArgumentAnArray(mixedArray);
// console.log(`isMixedArrayAnArray: ${isMixedArrayAnArray}`);
displayValueOnAnHTMLElement("isMixedArrayAnArray", isMixedArrayAnArray);

// ----------------------------------------------------------------
// Slide 24/54
// Add elements to an array
// push() - Adds element at the end of the array
const countries = ['Syria', 'Iraq', 'Jordan', 'Lebanon'];
// console.log(`countries: ${countries}`);
displayValueOnAnHTMLElement("countries", countries);

countries.push('Yemen');
// console.log(`countries.push() - Adds element (Yemen) at the end of the array: ${countries}`);
displayValueOnAnHTMLElement("countries.push() - Adds element (Yemen) at the end of the array", countries);

// unshift() - Adds element at the beginning of the array
countries.unshift('Turkey');
// console.log(`countries.unshift() - Adds element (Turkey) at the beginning of the array: ${countries}`);
displayValueOnAnHTMLElement("countries.unshift() - Adds element (Turkey) at the beginning of the array", countries);

// console.log(`countries - original array is modified, when using push() & unshift() array methods: ${countries}`);
displayValueOnAnHTMLElement("countries - original array is modified, when using push() & unshift() array methods", countries);

// ----------------------------------------------------------------
// Slide 25/54
// Remove elements from an array
// pop() - Removes element at the end of the array
countries.pop();
// console.log(`countries.pop() - Removes element at the end of the array: ${countries}`);
displayValueOnAnHTMLElement("countries.pop() - Removes element at the end of the array", countries);

// unshift() - Removes element at the beginning of the array
countries.shift();
// console.log(`countries.shift() - Removes element at the beginning of the array: ${countries}`);
displayValueOnAnHTMLElement("countries.shift() - Removes element at the beginning of the array", countries);

// console.log(`countries - original array is modified, when using pop() & shift() array methods: ${countries}`);
displayValueOnAnHTMLElement("countries - original array is modified, when using pop() & shift() array methods", countries);

// ----------------------------------------------------------------
// Slide 26/54
// Copy and Clone an array
// slice()
const clonedCountriesArrayUsingSliceMethod = countries.slice();
// console.log(`clonedCountriesArrayUsingSliceMethod: ${clonedCountriesArrayUsingSliceMethod}`);
displayValueOnAnHTMLElement("clonedCountriesArrayUsingSliceMethod", clonedCountriesArrayUsingSliceMethod);

// Spred Operator
const clonedCountriesArrayUsingSpreadOperator = [...countries];
// console.log(`clonedCountriesArrayUsingSpreadOperator: ${clonedCountriesArrayUsingSpreadOperator}`);
displayValueOnAnHTMLElement("clonedCountriesArrayUsingSpreadOperator", clonedCountriesArrayUsingSpreadOperator);

// ----------------------------------------------------------------
// Slide 27/54
// Array nesting (Nested array)
const nestedArrayFruitsAndVegetables = ['Peach', 'Broccoli', 'Strawberry', ['Beans', 'Carrot', 'Avocado'], 'Mushroom', 'Tomato'];
// console.log(`nestedArrayFruitsAndVegetables: ${nestedArrayFruitsAndVegetables}`);
displayValueOnAnHTMLElement("nestedArrayFruitsAndVegetables", nestedArrayFruitsAndVegetables);

const carrotFromNestedArrayFruitsAndVegetables = nestedArrayFruitsAndVegetables[3][1];
// console.log(`carrotFromNestedArrayFruitsAndVegetables: ${carrotFromNestedArrayFruitsAndVegetables}`);
displayValueOnAnHTMLElement("carrotFromNestedArrayFruitsAndVegetables", carrotFromNestedArrayFruitsAndVegetables);

// ----------------------------------------------------------------
// Slide 28/54
// Merge arrays using Spread Operator
const africanCountries = ['Ghana', 'Morocco', 'Libya', 'Congo'];
// console.log(`africanCountries: ${africanCountries}`);
displayValueOnAnHTMLElement("africanCountries", africanCountries);

const asianCountries = ['China', 'Vietnam', 'Indonesia', 'Pakistan'];
// console.log(`asianCountries: ${asianCountries}`);
displayValueOnAnHTMLElement("asianCountries", asianCountries);

const mergedAfricanAndAsianCountriesUsingSpreadOperator = [...africanCountries, ...asianCountries];
// console.log(`mergedAfricanAndAsianCountriesUsingSpreadOperator: ${mergedAfricanAndAsianCountriesUsingSpreadOperator}`);
displayValueOnAnHTMLElement("mergedAfricanAndAsianCountriesUsingSpreadOperator", mergedAfricanAndAsianCountriesUsingSpreadOperator);

// ----------------------------------------------------------------
// Slide 29/54
// Exercise - 2:
// - a) Create an array that contains 3 number elements and a nested array with 2 dogs names
// - b) Create a second array with 3 dogs names as string type
// - c) Clone the nested array with the 2 dogs names from a) and store it in a new variable
// - d) Merge the resulting array from c) with that from b) and console log the length of the resulting array. The answer should be 5

// - a) Create an array that contains 3 number elements and a nested array with 2 dogs names
const arrayWithNumberAndDogNames = [4, 7, 9, ["Jimmy", "Sparkle"]];
// console.log(`arrayWithNumberAndDogNames: ${arrayWithNumberAndDogNames}`);
displayValueOnAnHTMLElement("arrayWithNumberAndDogNames", arrayWithNumberAndDogNames);

// - b) Create a second array with 3 dogs names as string type
const dogNames = ["Fizz", "Johny", "Lilly"];
// console.log(`dogNames: ${dogNames}`);
displayValueOnAnHTMLElement("dogNames", dogNames);

// - c) Clone the nested array with the 2 dogs names from a) and store it in a new variable
const clonedArrayWithNumberAndDogNamesUsingSlice = arrayWithNumberAndDogNames[3].slice();
// console.log(`clonedArrayWithNumberAndDogNamesUsingSlice: ${clonedArrayWithNumberAndDogNamesUsingSlice}`);
displayValueOnAnHTMLElement("clonedArrayWithNumberAndDogNamesUsingSlice", clonedArrayWithNumberAndDogNamesUsingSlice);

const clonedArrayWithNumberAndDogNamesUsingSpreadOperator = [...arrayWithNumberAndDogNames[3]];
// console.log(`clonedArrayWithNumberAndDogNamesUsingSpreadOperator: ${clonedArrayWithNumberAndDogNamesUsingSpreadOperator}`);
displayValueOnAnHTMLElement("clonedArrayWithNumberAndDogNamesUsingSpreadOperator", clonedArrayWithNumberAndDogNamesUsingSpreadOperator);

// - d) Merge the resulting array from c) with that from b) and console log the length of the resulting array. The answer should be 5
const mergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames = [...clonedArrayWithNumberAndDogNamesUsingSlice, ...dogNames];
// console.log(`mergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames: ${mergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames}`);
displayValueOnAnHTMLElement("mergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames", mergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames);

const lengthOfMergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames = lengthOfAnArray(mergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames);
// console.log(`lengthOfMergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames: ${lengthOfMergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames}`);
displayValueOnAnHTMLElement("lengthOfMergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames", lengthOfMergeClonedArrayWithNumberAndDogNamesUsingSliceAndDogNames);

// ----------------------------------------------------------------
// Slide 32/54
// Array methods: Immutable (unchanging over time/unable to be changed) vs Mutable (liable to change/able to be changed)
const countdown = [1, 2, 3];
// console.log(`countdown: ${countdown}`);
displayValueOnAnHTMLElement("countdown", countdown);

const countdownReverseUsingReverseMethod = countdown.reverse();
// console.log(`countdownReverseUsingReverseMethod: ${countdownReverseUsingReverseMethod}`);
displayValueOnAnHTMLElement("countdownReverseUsingReverseMethod", countdownReverseUsingReverseMethod);

// console.log(`countdown after applying reverse() - countdown array got modified, since countdownReverseUsingReverseMethod variable referncing the countdown variable: ${countdown}`);
displayValueOnAnHTMLElement("countdown after applying reverse() - countdown array got modified, since countdownReverseUsingReverseMethod variable referncing the countdown variable", countdown);

// Slide 34/54
// Mutable methods (mutates existing arrays):
// ● pop
// ● push
// ● shift
// ● unshift
// ● reverse
// ● sort
// ● splice

// Immutable methods (does NOT mutate an existing arrays):
// ● slice
// ● concat
// ● map
// ● filter
// ● join

// Slide 35/54
// concat() method - does NOT mutate an existing array
const firstSetOfArrays = [1, 2, 3];
// console.log(`firstSetOfArrays: ${firstSetOfArrays}`);
displayValueOnAnHTMLElement("firstSetOfArrays", firstSetOfArrays);

const secondSetOfArrays = [4, 5, 6];
// console.log(`secondSetOfArrays: ${secondSetOfArrays}`);
displayValueOnAnHTMLElement("secondSetOfArrays", secondSetOfArrays);

const mergeFirstAndSecondSetOfArraysUsingConcatMethod = firstSetOfArrays.concat(secondSetOfArrays);
// console.log(`mergeFirstAndSecondSetOfArraysUsingConcatMethod: ${mergeFirstAndSecondSetOfArraysUsingConcatMethod}`);
displayValueOnAnHTMLElement("mergeFirstAndSecondSetOfArraysUsingConcatMethod", mergeFirstAndSecondSetOfArraysUsingConcatMethod);

// Slide 36/54
// join() method - joins all the elements of the array using a separator and returns a string. comma(,) is the default separator.
const joinFirstSetOfArraysUsingJoinMethod = firstSetOfArrays.join(' - ');
// console.log(`joinFirstSetOfArraysUsingJoinMethod: ${joinFirstSetOfArraysUsingJoinMethod}`);
displayValueOnAnHTMLElement("joinFirstSetOfArraysUsingJoinMethod", joinFirstSetOfArraysUsingJoinMethod);

// Slide 37/54
// includes() method - to determine the presence of an element in an array. If the element is found, the method returns true, and false otherwise.
const isNumber5InSecondSetOfArraysUsingIncludesMethod = secondSetOfArrays.includes(5);
// console.log(`isNumber5InSecondSetOfArraysUsingIncludesMethod: ${isNumber5InSecondSetOfArraysUsingIncludesMethod}`);
displayValueOnAnHTMLElement("isNumber5InSecondSetOfArraysUsingIncludesMethod", isNumber5InSecondSetOfArraysUsingIncludesMethod);

const isNumber7InSecondSetOfArraysUsingIncludesMethod = secondSetOfArrays.includes(7);
// console.log(`isNumber7InSecondSetOfArraysUsingIncludesMethod: ${isNumber7InSecondSetOfArraysUsingIncludesMethod}`);
displayValueOnAnHTMLElement("isNumber7InSecondSetOfArraysUsingIncludesMethod", isNumber7InSecondSetOfArraysUsingIncludesMethod);

// Slide 37/54
// indexOf() method - to know the index position of an element in array. It returns the index of the first occurrence of an element in the array. If an element is not found, the indexOf() method returns -1.
const indexOfNumber3InFirstSetOfArrays = firstSetOfArrays.indexOf(3);
// console.log(`indexOfNumber3InFirstSetOfArrays: ${indexOfNumber3InFirstSetOfArrays}`);
displayValueOnAnHTMLElement("indexOfNumber3InFirstSetOfArrays", indexOfNumber3InFirstSetOfArrays);

const indexOfNumber8InFirstSetOfArrays = firstSetOfArrays.indexOf(8);
// console.log(`indexOfNumber8InFirstSetOfArrays: ${indexOfNumber8InFirstSetOfArrays}`);
displayValueOnAnHTMLElement("indexOfNumber8InFirstSetOfArrays", indexOfNumber8InFirstSetOfArrays);

// ----------------------------------------------------------------
// Slide 42/54
// Array Iterator Methods:
// filter() - creates a new array with all the elements that satisfies the condition mentioned in the function.
const students = ["Jack", "Jane", "Maria", "John", "Rose", "Allen", "Ibra", "Robert", "Stella"];
// console.log(`students: ${students}`);
displayValueOnAnHTMLElement("students", students);

const getStudentsNameWithCapitalRFromStudentsArrayUsingFilterMethod = students.filter((student, index) => {
  const studentNameWithR = student.includes('R');
  return studentNameWithR;
});

// console.log(`getStudentsNameWithCapitalRFromStudentsArrayUsingFilterMethod: ${getStudentsNameWithCapitalRFromStudentsArrayUsingFilterMethod}`);
displayValueOnAnHTMLElement("getStudentsNameWithCapitalRFromStudentsArrayUsingFilterMethod", getStudentsNameWithCapitalRFromStudentsArrayUsingFilterMethod);

const getStudentsNameWithSmallRFromStudentsArrayUsingFilterMethod = students.filter((student, index) => {
  const studentNameWithR = student.includes('r');
  return studentNameWithR;
});

// console.log(`getStudentsNameWithSmallRFromStudentsArrayUsingFilterMethod: ${getStudentsNameWithSmallRFromStudentsArrayUsingFilterMethod}`);
displayValueOnAnHTMLElement("getStudentsNameWithSmallRFromStudentsArrayUsingFilterMethod", getStudentsNameWithSmallRFromStudentsArrayUsingFilterMethod);

// Slide 43/54
// map() - method creates a new array by iterating through the elements and applying logic we provided in the function as an argument.

// Convert all of the students names in capital letters.
const convertStudentNamesInCapitalLetterUsingMapMethod = students.map((student, index) => {
  const studentNameInCapitalLetter = student.toUpperCase();
  return studentNameInCapitalLetter;
});

// console.log(`convertStudentNamesInCapitalLetterUsingMapMethod: ${convertStudentNamesInCapitalLetterUsingMapMethod}`);
displayValueOnAnHTMLElement("convertStudentNamesInCapitalLetterUsingMapMethod", convertStudentNamesInCapitalLetterUsingMapMethod);

// Slide 44/54
// reduce() - applies a reducer function on each of the array elements and returns an output value. 

// Apply a reducer function on the students array to compute the total amount of letters the names of the students have.

// ● Initialize the accumulator with 0.
// ● Apply the reduce method on each of the student names. We retrieve the name length and add it to the accumulator.
// ● Finally, return the accumulator.

const totalNumberOfLetterInStudentsNameUsingReduceMethod = students.reduce((accumulator, student) => {
  // accumulator = accumulator + student.length;
  // return accumulator;
  return accumulator += student.length;
}, 0);

// REFER - https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/
// In the first iteration, the accumulator parameter will contain whatever value you passed as the second argument of the reduce() method. In the above case, it’s 0.

// https://www.w3schools.com/jsref/jsref_reduce.asp
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// console.log(`totalNumberOfLetterInStudentsNameUsingReduceMethod: ${totalNumberOfLetterInStudentsNameUsingReduceMethod}`);
displayValueOnAnHTMLElement("totalNumberOfLetterInStudentsNameUsingReduceMethod", totalNumberOfLetterInStudentsNameUsingReduceMethod);

// Slide 46/54
// some() - returns a boolean value (true/false) based on at least one element in the array passing the condition in the function.

const isNameRoseInStudentsArray = students.some(student => student.includes('Rose'));
// console.log(`isNameRoseInStudentsArray: ${isNameRoseInStudentsArray}`);
displayValueOnAnHTMLElement("isNameRoseInStudentsArray", isNameRoseInStudentsArray);

const isNameLillyInStudentsArray = students.some(student => student.includes('Lilly'));
// console.log(`isNameLillyInStudentsArray: ${isNameLillyInStudentsArray}`);
displayValueOnAnHTMLElement("isNameLillyInStudentsArray", isNameLillyInStudentsArray);

const hasStudentNameSmallL = students.some(student => student.includes('l'));
// console.log(`hasStudentNameSmallL: ${hasStudentNameSmallL}`);
displayValueOnAnHTMLElement("hasStudentNameSmallL", hasStudentNameSmallL);

// Slide 47, 48/54
// find() - returns the first matched element from the array that satisfies the condition in the function.
// example - find() method, checks for the name including 'l' for each of the students & return the first matched element

const studentNameWithSmallL = students.find(student => student.includes('l'));
// console.log(`studentNameWithSmallL: ${studentNameWithSmallL}`);
displayValueOnAnHTMLElement("studentNameWithSmallL", studentNameWithSmallL);

const studentNameWithSmallY = students.find(student => student.includes('y'));
// console.log(`studentNameWithSmallY: ${studentNameWithSmallY}`);
displayValueOnAnHTMLElement("studentNameWithSmallY", studentNameWithSmallY);

// findIndex() - returns the index of the element we find using the find() method. If no elements match the condition, the findIndex() method returns -1.

const findIndexOfStudentNameWithSmallL = students.findIndex(student => student.includes('l'));
// console.log(`findIndexOfStudentNameWithSmallL: ${findIndexOfStudentNameWithSmallL}`);
displayValueOnAnHTMLElement("findIndexOfStudentNameWithSmallL", findIndexOfStudentNameWithSmallL);

const findIndexOfStudentNameWithSmallY = students.findIndex(student => student.includes('y'));
// console.log(`findIndexOfStudentNameWithSmallY: ${findIndexOfStudentNameWithSmallY}`);
displayValueOnAnHTMLElement("findIndexOfStudentNameWithSmallY", findIndexOfStudentNameWithSmallY);

// Slide 49/54
// Exercise - 3:
// a) Create an array with 4 names of some of your family members
// b) Use map method to get an array with the name of the family members and an exclamation point (!) at the end.
// c) Use filter to get the family members that have a name length bigger than 6.
// d) Use reduce to get the total amount of letters in all the names.

// a) Create an array with 4 names of some of your family members
const familyMembers = ['Emmanuel', 'John', 'Ellen', 'Christopher'];

// console.log(`familyMembers: ${familyMembers}`);
displayValueOnAnHTMLElement("familyMembers", familyMembers);

// b) Use map method to get an array with the name of the family members and an exclamation point (!) at the end.
const addExclamationToFamilyMembers = familyMembers.map(familyMember => familyMember.concat('!'));

// console.log(`addExclamationToFamilyMembers: ${addExclamationToFamilyMembers}`);
displayValueOnAnHTMLElement("addExclamationToFamilyMembers", addExclamationToFamilyMembers);

// c) Use filter to get the family members that have a name length bigger than 6.
const filterFamilyMemeberNameLengthBiggerThan6 = familyMembers.filter(familyMember => familyMember.length > 6);

// console.log(`filterFamilyMemeberNameLengthBiggerThan6: ${filterFamilyMemeberNameLengthBiggerThan6}`);
displayValueOnAnHTMLElement("filterFamilyMemeberNameLengthBiggerThan6", filterFamilyMemeberNameLengthBiggerThan6);

// d) Use reduce to get the total amount of letters in all the names.
const totalNumberOfLettersInFamilyMembers = familyMembers.reduce((total, name) => {
  total = total + name.length;
  return total;
}, 0);

// console.log(`totalNumberOfLettersInFamilyMembers: ${totalNumberOfLettersInFamilyMembers}`);
displayValueOnAnHTMLElement("totalNumberOfLettersInFamilyMembers", totalNumberOfLettersInFamilyMembers);

// Extra - total amount of letters in all the names, with exclamation point at the end
const totalNumberOfLettersInFamilyMembersWithExclamationPoint = addExclamationToFamilyMembers.reduce((total, name) => {
  total = total + name.length;
  return total;
}, 0);

// console.log(`totalNumberOfLettersInFamilyMembersWithExclamationPoint: ${totalNumberOfLettersInFamilyMembersWithExclamationPoint}`);
displayValueOnAnHTMLElement("totalNumberOfLettersInFamilyMembersWithExclamationPoint", totalNumberOfLettersInFamilyMembersWithExclamationPoint);
