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

            // setter
              set deposite(amount:number){
                this._balance = this._balance + amount;
              }


    
            // public getBalance(){
            //     return this._balance
            // }

            // getter
            get balance(){          // get ব্যবহার করলে ফাংশান কে কল করতে হয় না।
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
        goribManusAccount.deposite = 100; // using set

        // const myBalance = goribManusAccount.getBalance()
        const myBalance = goribManusAccount.balance // get ব্যবহার করলে ফাংশান কে কল করতে হয় না।

        console.log(myBalance);
    
    }
