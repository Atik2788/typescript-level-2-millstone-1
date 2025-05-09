    {

        class BankAccount{
            readonly id: number; 
            public name: string; 
            private _balance: number; 
            protected _newBalance: number;

            constructor(id: number, name: string, balance: number, newBalance: number){
                this.id = id;
                this.name = name;
                this._balance = balance;
                this._newBalance = newBalance;
            }
    
            // public addDeposite(amount: number){
            //     this._balance = this._balance + amount
            // }
    
            // public getBalance(){
            //     return this._balance
            // }
            // getter
            get Balance(){
                return this._balance;
            }
        }
    
        class StudentAccount extends BankAccount{
            test(){
                this._newBalance
            }
        }
    
    
        
        const goribManusAccount = new BankAccount(111, 'Mr Gorib', 10, 10)

        // goribManusAccount.addDeposite(500)
        // const myBalance = goribManusAccount.getBalance()
        const myBalance = goribManusAccount.Balance

        console.log(myBalance);
    
    }
