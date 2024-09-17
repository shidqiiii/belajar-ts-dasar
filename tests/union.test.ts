describe('union type', () => { 
    it('should union type', () => {
        let name: string | number = "Hello World"
        
        console.info(name)

        name = 123
        console.info(name)
    })
 })