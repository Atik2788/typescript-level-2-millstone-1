{
    // alias
    type User1 ={
        name: string;
        age: number
    }
    
    // interface
    interface User2 {
        name: string;
        age: number
    }


    // alias in object
    type UserWithRole1 = User1 & {role: string}
    
    const user1:UserWithRole1 = {
        name: "Persian",
        age: 35,
        role: "manager"
    }
    
    // interface in object
    interface UserWithRole2 extends User2 {
        role: string
    }

    const user2:UserWithRole2 = {
        name: "Persian",
        age: 35,
        role: "manager"
    }


    // alias in array
    type Roll1 = number[];
    const rollNumber1: Roll1 = [1, 2, 3]


   // interface in array
    interface Roll2 {
        [index: number] : number
    }
    const rollNumber2: Roll2 = [1, 2, 3]


    // alias in function
    type Add = (num1: number, num2: number) => number;
    const add:Add = (num1, num2) => num1 + num2;


   // interface in function
    interface Add2{
        (num1:number, num2:number) : number;
    }
    const add2:Add2 = (num1, num2) => num1 + num2;
}