{
// generic type ---> প্যারামিটার পাঠিয়ে টাইপ ডিক্লেয়ার করা।

type GenericArray<T> = Array<T>

// const rollNumbers: number[] = [1, 3, 6, 5, 5]
const rollNumbers: GenericArray<number> = [1, 3, 6, 5, 5]
const mentors: GenericArray<string> = ['x', 'y', 'z']
const boolArray: GenericArray<boolean> = [true, false, true]

const user: GenericArray<{name: string, age: number }> = [
    {
        name: "Mezba",
        age: 100
    },
    {
        name: "Jhankar",
        age: 32
    },
]

    // generic tuple****************
    type GenericTuple<X,Y> = [X, Y]
    const manush: GenericTuple<string, string> = ['Mr. X', "Mr. Y"]

    const userWithId: GenericTuple<number,{name:string, email:string} > = [1234, {name: "Persian", email: 'a@gmail.com'}]

}