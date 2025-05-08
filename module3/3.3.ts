{
    // type guards

    type Alphanumeric = string | number 

    const add = (param1: Alphanumeric, param2: Alphanumeric ): Alphanumeric =>{
        if(typeof param1 === "number" && typeof param2 === "number"){
            return param1 + param2;
        } else{
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(2, 3)
    const result2 = add("2", 3)

    console.log('one:',result1,". two:",result2);



    // in guard
    type NormalUser = {
        name: string
    }

    type Admin = {
        name: string,
        role: "admin"
    }

    const getUser = (user: NormalUser | Admin) =>{
        if("role" in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else{
            console.log(`my name is ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: "Atik"
    }
    const adminUser: Admin = {
        name: "Shanta",
        role: "admin" 
    }

    getUser(normalUser); // Normal user
    getUser(adminUser); // Admin

}