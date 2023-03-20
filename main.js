// Array.prototype.entries()
// this return a sequence of values ,but reveals them one by one using an iterable, instead of all at once as an array
//it provides the next() method that return the  next item in the sequance
// the next() method return the done (which is a boolean value that returns true when all elements of the itarable are over) ,and value (rep the itemin the collection)

const arr =[3,8,9,2];

//this is an itarable to arr
const itr =arr[Symbol.iterator]();
console.log( itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
