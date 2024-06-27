// asynchronus js
// The line by line or one by one exection of code/task is known as synchronus .
// Using some web api's asynchronus code beha ve the task/codr
/*
console.log('First');
console.log('Second');
console.log('Third');
*/
// v8 is chrome based open source javascript engine. 
// javascript does wait for anything it just run the code line by line. even if you impliment dom, set time interval it doesnt wait insted it refer the documentations and code by the web api inside the browser.

// asynchronus behaviour -- set time out for 2 seconds
/*
console.log('First')
setTimeout(() => console.log('Second'),2000);
console.log('Third')
*/

// promises
// promise only show the state of the promised value
// insted to get value on concole we use ".then-able" .It helps do a chain of events construction
// 3 stages: pending, Fulfilled(resolve), Rejected
// here the resolve and reject are the function
const myPromise = new Promise((resolve,reject) =>{
    const error = false;
    if(!error){
        resolve("Yes! the problem is resolved")
    }else{
        reject("no! the problem doesn't resoved and get rejected")
    }
})
console.log(myPromise)

 


// promise pending(time delay) --setTimeout helps here
const nextPromise = new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve("my next promises resolved")
    },3000)
})

nextPromise
.then(val =>{
    console.log(val)
})

// thenable process to display the value insted of state in a promise(chain of events .then,.then,.then,...) and also we can save from callback hell using thenable.
myPromise
.then(value => {
    // console.log(value)
    return value + " and im happy.."
})
.then(newValue => console.log(newValue)).catch(err => {
    console.log(err)
    // .catch helps to print the error on console.
})  

// 21/6/24
// promise pending (fetch)
// using fetch we can able to fetch the data from another sources
// json was the commanly stored data in a database and servers
const users = fetch("https://jsonplaceholder.typicode.com/users").then(respon => {
    // console.log(respon)
    // to make this readable we use json and make this return insted console
    return respon.json()
}).then(user =>{
    // to print each file in a json file use forEach() method
    // console.log(user)
    user.forEach(element => {
        console.log(element)
    });
})

console.log(users)