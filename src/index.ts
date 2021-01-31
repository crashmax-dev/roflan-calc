export class RoflanCalc {

    constructor() { }

    sum(x: number, y: number): number {
        return this.lg(this.rp(x).concat(this.rp(y)))
    }

    minus(x: number, y: number): number {
        return this.lg(this.rp(x).substring(this.lg(this.rp(y))))
    }

    divide(x: number, y: number): number {
        return this.chunk(this.rp(x), this.lg(this.rp(y)))
    }

    multiply(x: number, y: number): number {
        let sum: number = x

        for (let i = 0; i < y - 1; i++) {
            sum += x
        }

        return sum
    }

    private rp(num: number): string {
        return ' '.repeat(num)
    }

    private lg(str: string | any[]): number {
        return str.length
    }

    private chunk(str: string, lg: number): number {
        let strings: string[] = []

        for (let i = 0; i < str.length / lg; i++) {
            strings.push(str.substring(i * lg, (i + 1) * lg))
        }

        return this.lg(strings)
    }
}