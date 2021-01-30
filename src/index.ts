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

    private rp(num: number) {
        return ' '.repeat(num)
    }

    private lg(str: string | any[]): number {
        return str.length
    }

    private chunk(str: string, lg: number): number {
        let padString: string[] = []
        let pad = str.padEnd(Math.ceil(this.lg(str) / lg) * lg, ' ')

        for (let i = 0; i < pad.length / lg; i++) {
            padString.push(pad.substring(i * lg, (i + 1) * lg))
        }

        // console.log(`Chunk (divide): ${JSON.stringify(padString)}`)

        return this.lg(padString)
    }
}