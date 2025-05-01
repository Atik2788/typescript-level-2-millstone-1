{
    // spread operator

    const bros1: string[] =['Mir', "Firoz", "Mizan"];
    const bros2: string[] = ["Tanmoy", "Nahid from bkash", "Rahat"]
    bros1.push(...bros2)


    const mentors1 ={
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan"
    } 

    const mentors2={
        prisma: "Firoz",
        next: "Tonmoy",
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    // rest operator
    const geetFriends = (...friends: string[])=>{

        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    geetFriends("Abdul", "Humayun", "Kader")
}