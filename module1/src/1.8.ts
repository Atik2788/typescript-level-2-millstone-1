{
// destructuring Object:
const user = {
    id: 456,
    name:{
        firstName: "Mezbaul",
        middleName: "Abedin",
        lastName: "Persian",
    },
    contactNO: "0170000000000",
    address: "Uganda"
}

const {contactNO, name:{middleName}} = user;

 

// destructuring Array:
const myFriends = ["Tanmoy", "Nahid from bkash", "Rahat", "Jakir"]

const [,, bestFriend, ...rest] = myFriends;

}