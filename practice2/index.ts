// install
// cd forder
// npm i -g typescript ts-node ts-lib @types/node
// khoi tao ts config
// tsc --init

const genericFunc = <T>(a:T):string=>{
    return typeof a;
}

console.log(genericFunc<string>('tung'));

class genericClass<T>{
    constructor(
        private a:T
    ){}
    getA(){
        return this.a;
    }
}

const testGenericClass = new genericClass<number>(2);

console.log(typeof(testGenericClass.getA()));
