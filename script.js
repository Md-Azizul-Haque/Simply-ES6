
const arrowFunction = (a,b,c) =>  a*b*c;  // arrow function take 3 parameters and multiply
console.log(arrowFunction(3,6,10));

console.log(`I am a web developer.  
I love to code.
I love to eat biryani.`);

const defaultParameter =(a, b=10) => a+b; //arrow function take 2 parameters,one default para
console.log(defaultParameter(12));


// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

const Even = (a,b,c,d,e,f,g) => {
    const length = [a,b,c,d,e,f,g];    
              for (const item of length) {
                if (item.length % 2 === 0) {
                 console.log(item);
                }
              }       
            }
const myFriendName = ["sumon", "azizul", "hasan", "sujon", "dhrubo", "halima", "joy"];
 Even(...myFriendName);

//  a) Square each array element
//  b) Calculate the sum of the squared elements
//  c) Return the average of the sum of the squared elements
 const numbers = [2,4,6,8,10];
 const numbersAll =[...numbers];
 var sum =0;
 for (const item of numbersAll) {
    const square = (item * item);
    console.log(square);
     sum = sum + square;
 }
 console.log(`total sum of the squared elements ${sum}`);

//  Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
 const maxNumber = () => {
 const arrayOne = [2,4,6,8];
const arrayTwo = [10,20,30,40];
const arrayMix = [...arrayOne, ...arrayTwo];
console.log(arrayMix); 
const maxNumber = Math.max(...arrayMix);
return maxNumber;
}
console.log(`console.log("Maximum number from the new array ${maxNumber()}`);