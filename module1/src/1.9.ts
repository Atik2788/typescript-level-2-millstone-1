{

    // Type Alial obj

    type Student ={
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
        address: string;
    }


    const student:Student = {
        name: 'Naim',
        age: 32,
        contactNo: '017000000000',
        gender: "male",
        address: "Dhk"
    }



    // Type Alial function
    type Add = (num1: number, num2: number) => number;
    const add:Add = (num1, num2) => num1+num2; 

}