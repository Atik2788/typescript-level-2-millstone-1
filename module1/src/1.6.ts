function add(num:number, num2:number): number{
    return num+num2
}

add(2, 2)


const poorUser = {
    name: "Atik",
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is: ${this.balance+balance}`
    }
};



const poorUser2:{
    name:string;
    balance: number;
    addBalance: (balance: number) => string;
} = {
    name: "Atik",
    balance: 0,
    addBalance(balance){
        return `My new balance is: ${this.balance+balance}`
    }
};



const arr: number[] = [1, 4, 10]
const newArray = arr.map((el: number) : number => el*el)