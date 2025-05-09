{
     // Polymorphism
     class Person{
        getSleep(){
            console.log(`I am sleeping 8 hours a day!`);
        }
     }

     class Student extends Person{
        getSleep(){
            console.log(`I am sleeping 7 hours a day!`);
        }
    }

     class Developer extends Person{
        getSleep(){
            console.log(`I am sleeping 5 hours a day!`);
        }
     }

     const getSleepingHour = (param: Person) =>{
        param.getSleep();
     }

     const person1 = new Person()
     const person2 = new Student()
     const person3 = new Developer()

     getSleepingHour(person1)
     getSleepingHour(person2)
     getSleepingHour(person3)




     class Shape {
        getArea(): number{
            return 0;
        }
     }

     // pi * r * r
     class Circle extends Shape{
        redius: number;
        
        constructor(redius: number){
            super();
            this.redius = redius;
        }

        getArea(): number {
            return Math.PI * this.redius * this.redius
        }
     }

     // height * width
     class Rectangle extends Shape{
        height: number;
        width: number;
        
        constructor(height: number, width: number){
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width;
        }
     }

     const getShape = (param: Shape) =>{
        console.log(param.getArea());
     }

     const shape1 = new Shape()
     const shape2 = new Circle(3)
     const shape3 = new Rectangle(5, 3)


     getShape(shape1)
     getShape(shape2)
     getShape(shape3)


}