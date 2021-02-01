import { RoflanCalc } from '../src/index'

(() => {
    const calc = new RoflanCalc()

    console.log(`Sum: ${calc.sum(6, 4)}`)
    console.log(`Minus: ${calc.minus(6, 3)}`)
    console.log(`Divide: ${calc.divide(16, 4)}`)
    console.log(`Multiply: ${calc.multiply(5, 5)}`)
    console.log(`Pow: ${calc.pow(7, 2)}`)
})()