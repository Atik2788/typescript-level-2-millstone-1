{
    //Abstraction in OOP:  1. interface     2. abstract
    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementation
    class Car implements Vehicle1{
        startEngine(): void {
            console.log(`I am starting the car engine... vurum... vurum...`);
        }
        stopEngine(): void {
             console.log(`I am stoping the car engine.`);
        }
        move(): void {
            console.log(`I am moving the car engine.`);
        }
        test() { 
              console.log(`I am just testing...`);
         }
    }

    const toyotaCar = new Car()
    // toyotaCar.startEngine()

    

    // abstract class

    abstract class Car2{
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void ;
        test() { 
              console.log(`I am just testing...`);
         }
    }

    class ToyotaCar extends Car2{
        startEngine(): void {
            console.log(`I am starting the car engine... vurum... vurum...`);
        }
        stopEngine(): void {
             console.log(`I am stoping the car engine.`);
        }
        move(): void {
            console.log(`I am moving the car engine.`);
        }
        test() { 
              console.log(`I am just testing...`);
         }
    }

    const hondaCar = new ToyotaCar()
    hondaCar.stopEngine()


}