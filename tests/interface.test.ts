import { Employee, Manager } from "../src/employee"
import { Seller } from "../src/seller"

describe('interface', () => { 
    it('should interface', () => {
        const seller : Seller = {
            id: 1,
            name: "Seller 1",
            nip: "1234567890"
        }

        console.info(seller)
    })

    it ('should function interface', () => {
        interface addNumber {
            (num1: number, num2: number): number
        }

        const add: addNumber = (num1, num2) => num1 + num2
        
        expect(add(1, 2)).toBe(3)
    }) 

    it ('should extend interface', () => {
        const employee : Employee = {
            id: 1,
            name: "Employee 1",
            division: "IT"
        }

        
        const manager : Manager = {
            ...employee,
            numberEmployee: "10"
        }

        console.info(manager)
    })
 })