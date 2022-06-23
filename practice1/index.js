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

// clearTimeout(testTimeout);

const promise = new Promise((resolve, reject) => {
    resolve('test')
});
promise
.then(result => console.log(result))
.catch(error => console.log(error));


const testAsync = async() =>{
    return await new Promise((resolve, reject) => {
        resolve('async test')
    }).then((data)=>console.log(data))
}

testAsync()

