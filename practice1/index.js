// function type

function testFunc1(){
    console.log('test func1');
}
const testFunc2 = ()=>{
    console.log('test func2');
}

testFunc1();
testFunc2();

const testTimeout =setTimeout(()=>{
    console.log('test timeout');
},0)

const testInterval =setInterval(()=>{
    console.log('test interval');
},1000)


// clearTimeout(testTimeout);

const promise = new Promise((resolve, reject) => {
    resolve('test')
});
promise
.then(result => console.log(result))
.catch(error => console.log(error));


const numPromises = new Promise((resolve, reject) => {
    resolve(5)
})
    .then(result => result*2)
    .then(result => (result*2))
    .then(result => console.log(result))

const testAsync = async() =>{
    return await new Promise((resolve, reject) => {
        resolve('async test')
    }).then((data)=>console.log(data))
}

testAsync()

