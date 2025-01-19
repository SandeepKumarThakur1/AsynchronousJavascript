function* getNum() {
    console.log('Started')
    yield 1;
    console.log('Started 2')
    yield 2;
    console.log('Started 3')
    yield 3;
}

const getYieldValue = getNum()
console.log(getYieldValue.next())
console.log(getYieldValue.next())
console.log(getYieldValue.next())
console.log(getYieldValue.next())
// console.log(getYieldValue.next().value)
// console.log(getYieldValue.next().value)
// console.log(getYieldValue.next().value)
// console.log(getYieldValue.next().value)