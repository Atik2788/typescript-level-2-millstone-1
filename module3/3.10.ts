{
    {

    class BankAccount{
        readonly id: number; // রিড অনলি দেওয়ার কারণে এটিকে কখনই পরিবর্তন করা যাবে না।
        public name: string; // পাবলিক করার কারনণ এটি কে ক্লাস এর বাহির থেকেও পরিবর্তন করা যাবে।
        private _balance: number; // প্রাইভেট করার কারণে এটিকে ক্লাস এর ভেতর থেকেই শুধু পরিবর্তন করা যাবে। ক্লাস এর বাইরে থেকে পরিবর্তন করা যাবে না।
        protected _newBalance: number; // প্রোটেকটেড করার কারণে এটিকে ক্লাস বাহির থেকে পরিবর্তন করা যাবে না, তবে এটিকে এই ক্লাস এর চাইল্ড ক্লাস থেকে পরিবর্তন বা এক্সেস করা যাবে।

        constructor(id: number, name: string, balance: number, newBalance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
            this._newBalance = newBalance;
        }

        public addDeposite(amount: number){
            this._balance = this._balance + amount
        }

        private getBalance(){
            return this._balance
        }

        // নিচের ফাংশন দিয়ে ‍উপরের প্রইভেট গেট ব্যালেন্স কে এক্সেস করা যাবে।
        getHiddenBalance(){
            this.getBalance
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.getHiddenBalance
        }
    }


    
    const goribManusAccount = new BankAccount(111, 'Mr Gorib', 10, 10)
    goribManusAccount.name = "Rich" // name চেঞ্জ করা গিয়েছে। কারণ এটি  পাবলিক করা আছে।
    goribManusAccount.addDeposite(500)
    const myBalance = goribManusAccount.getHiddenBalance()
    console.log(myBalance);

}

}