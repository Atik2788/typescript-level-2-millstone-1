{
    // 7 Statics in OOP
    class Counter{
        static count: number = 0
        
        static increment(){
            return (Counter.count = Counter.count +1);
        }

        static deccrement(){
            return (Counter.count = Counter.count - 1)
        }

    }

    console.log(Counter.increment());
    console.log(Counter.increment());

}