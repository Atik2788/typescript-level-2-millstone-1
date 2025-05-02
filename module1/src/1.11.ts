{
    // Ternary Operator****************

    const age: number = 25;

    if(age >=18){
        console.log('Aduld');
    }else{
        console.log('Not Adult');
    }

    const isAudult = age >= 18 ? "Adult" : "Not Adult"


    // Nullish Coalesching Operator*****************
    // null / undefine ---> decision making

    const isAuthenticated1 = null;
    // or
    const isAuthenticated = undefined;

    const result1 = isAuthenticated ?? "Guest";
    console.log({result1});


    // Optional Chaining
    type User ={
        name: string;
        address:{
            city: string;
            road: string;
            presendAddress: string;
            permanentAddress?: string
        }
    }

    const user: User = {
        name: "Persian",
        address:{
            city: 'ctg',
            road: "Awsome Road",
            presendAddress: "ctg town "
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No permanent address";
    console.log({permanentAddress});

}