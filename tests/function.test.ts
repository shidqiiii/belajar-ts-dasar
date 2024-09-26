describe('function', () => { 
    it('should function', () => {
        function sayHello (name: string = "Guest"): string {
            return `Hello ${name}`
        }
        
        expect(sayHello("World")).toBe("Hello World")
        expect(sayHello()).toBe("Hello Guest")
    })

    it ('should support rest params', () => {
        function sum(...numbers: number[]): number {    
            let total = 0
            for (const number of numbers) {
                total += number
            }
            return total
            }  

            expect(sum(1, 2, 3)).toBe(6)
    })

    it('should support function as params', async () => {
        function sayHello(name:string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`
        }

        function toUpper(name: string): string {
            return name.toUpperCase()
        }

        expect(sayHello("World", toUpper)).toBe("Hello WORLD")
    })
 })