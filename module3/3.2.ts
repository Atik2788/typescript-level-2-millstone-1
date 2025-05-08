{
    // OOP Inheritence:

    // parent class
    class Parent{

        constructor(public name:string, public age:number, public address: string){

        }
        getSleep(numOfHOurs: number){
            console.log(`${this.name} will sleep ${numOfHOurs} hours`);
        }
    }


    // class 1
    class Student extends Parent {

        constructor(name:string, age:number, address: string){
            super(name, age, address)
        }        
    }

    const student1 = new Student("Mr X", 27, 'Dhaka')
    student1.getSleep(8)


    // class 2
    class Teacher extends Parent {

        constructor(name: string, age: number, address: string, public designation: string){
            super(name, age, address)
        }

       getClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }

    const teacher1 = new Teacher("Mr T", 40, 'Dhaka', "Uganda")
    teacher1.getClass(8)

}