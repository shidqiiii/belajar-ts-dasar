describe('Array', () => { 
    it('should array', () => {
        const name: string[] = ["Hello", "World"]
        
        console.info(name)
    })

    it ('should array 2', () => {
        const name: ReadonlyArray<string> = ["Hello", "World"]
        
        console.info(name)
    })
 })