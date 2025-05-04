{
    //2-5 Function with generics
    const createArrayWithGenerics = <T>(param: T): T[] =>{
        return [param]
    }

    const resGeneric = createArrayWithGenerics<string>('Bangladesh')

    type User = {id: number; name:string}

    const resGenericPbj = createArrayWithGenerics<User>({id:222, name: "Mr. Pashan"})




    const createArrayWithGenerics2 = <T, Q>(param1: T, param2: Q): [T,Q] =>{
        return [param1, param2]
    }

    const resGeneric2 = createArrayWithGenerics2<string, number>('Bangladesh', 222)

    const resGeneric3 = createArrayWithGenerics2<string, {name: string}>('Bangladesh', {name: "Asia"});


    const addCourseToStudent = <T>(student: T) =>{
        const course = "Next level web development"

        return{
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Mr. X", email:"x@gmail.com", devType: 'Next level'})
    const student2 = addCourseToStudent({name: "Mr. Y", email:"Y@gmail.com", devType: 'Next level', hasWatch: "Apple Watch"})

}