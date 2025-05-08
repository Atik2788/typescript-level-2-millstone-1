{

  // instance of gurad
  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string){
      this.name = name;
      this.species = species;
    }

    makeSound(){
      console.log('I am making sound');
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string){
      super(name, species)
    }
    makeBark(){
      console.log('I am barking');
    }
  }


  class Cat extends Animal {
    constructor(name: string, species: string){
      super(name, species)
    }
    makeMeaw(){
      console.log('I am meawing');
    }
  }



  const isDog = (animal: Animal): animal is Dog =>{
    return animal instanceof Dog
  }

  const isCAt = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  }


  
  const getAnimal = (animal: Animal) =>{
    // animal.makeBark()
    if(isDog(animal)){
      animal.makeBark()
    }
    else if(isCAt(animal)){
      animal.makeMeaw()
    } else{
      animal.makeSound()
    }
  }

  const dog = new Dog("Dog bhai", "dog")
  const cat = new Cat("Cat bhai", "cat")
  
  getAnimal(cat)






}