{
  // 2-6: Constraints in typescript
  const addCourseToStudent = <T extends{name: string, id: number, email: string}>(student: T) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };

//   const student3 = addCourseToStudent({emni: 'emni'}) //its showing error
  const student3 = addCourseToStudent({id: 44, name: 'YY', email: 'yy@gmail.com',emni: 'emni'}) 

  const student1 = addCourseToStudent<{
    id: number
    name: string;
    email: string;
    devType: string;
}>({
    id: 222,
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "Next level",
  });

  const student2 = addCourseToStudent({
    id: 222,
    name: "Mr. Y",
    email: "Y@gmail.com",
    devType: "Next level",
    hasWatch: "Apple Watch",
  });
}
