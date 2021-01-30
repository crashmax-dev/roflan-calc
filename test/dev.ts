import { RoflanCalc } from '../src/index'

(() => {
    const calc = new RoflanCalc()

    console.log(`Sum: ${calc.sum(6, 4)}`)
    console.log(`Minus: ${calc.minus(10, 4)}`)
    console.log(`Divide: ${calc.divide(16, 4)}`)
})()