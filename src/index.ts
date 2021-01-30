export class RoflanCalc {

    constructor() { }

    sum(x: number, y: number): number {
        return ' '.repeat(x).concat(' '.repeat(y)).length
    }

    minus(x: number, y: number): number {
        return ' '.repeat(x).substring(' '.repeat(y).length).length
    }
}