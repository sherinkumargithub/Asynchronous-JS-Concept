// Asynchronous Javascript
// Async / Await
// compare this code with promise

// global declaration
const myUser = {
    userList: []
}


const user = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await response.json()
    // console.log(userData)
    anotherFunction(userData)
    return userData
}
// user()

// anotherfunction
const anotherFunction = async (data) =>{
    // declaring data into a argument
    // const data = await user()
    myUser.userList =data
    // local declaration
    console.log(myUser)
    return data
}

// anotherFunction()
user()
// value of global
console.log(myUser)


// same code as good practice was not using await on mst time it helds to make a time delay.

// eg2 using fetch
// in an object fetch is commanly declare as a entry cause it show slight time delay
/*
const getDadJoke = async ()=>{
    const respon = await fetch("https://icanhazdadjoke.com/",{
        method: "GET",
        headers:{
            Accept: "application/plain"
        }
    })
    const jsonJokeData = await respon.json()
    console.log(jsonJokeData.joke)
}
getDadJoke()
*/
// gpt here
// to get data from a server
const getDadJoke = async () => {
    const respon = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    })
    const jsonJokeData = await respon.json()
    console.log(jsonJokeData.joke)
}

getDadJoke()

// here to post data to server
// data
const postJoke = {
    id: 'AAbcdef',
    joke: 'What do Alexander the Great and Winnie the Pooh have in common? Same middle name.'
}

const postDadJoke = async(jokeObj) =>{
    const response = await fetch("https://httpbin.org/post",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(jokeObj)
    })
    const responsData = await response.json()
    console.log(responsData)
}
postDadJoke(postJoke)