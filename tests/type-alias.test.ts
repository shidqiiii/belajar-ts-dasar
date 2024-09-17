import { Category, Product } from "../src/type-alias"

describe('type aliast', () => { 
    it('should type alias', () => {
        
        const category :Category = {
            id: "1",
            name: "Category 1"
        }
        
        const product : Product = {
            id: "1",
            name: "Product 1",
            price: 1000,
            category : category,
        }

        console.info(product)
        
    })
 })