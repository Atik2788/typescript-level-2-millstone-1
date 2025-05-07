{
    // utility types


     type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
     }

     // Pick --> Pick only name and age
     type Name = Pick<Person, "name">
     type NameAge = Pick<Person, "name" | "age">


     // Omit --> get the type without name and age
     type ContactInfo = Omit<Person, "name" | "age">


     // Require --> use all of type required
     type PersonRequire = Required<Person>


     // Partial --> use all of type optional
     type personPartial = Partial<Person>;


     // Read Only -->  you can read only, can't change its value;
     type PersonReadOnly = Readonly<Person>

     const  person1: PersonReadOnly ={
        name: "xy",
        age: 200,
        contactNo: '017'
     }
     person1.name= "tts" // its showing error: Cannot assign to 'name' because it is a read-only property.


     // Record
     type MyObj = Record<string, string>

     const obj: MyObj = {
        a: 'aa',
        b: 'bb'
     }

     const EmptyObj : Record<string, unknown> = {}

}