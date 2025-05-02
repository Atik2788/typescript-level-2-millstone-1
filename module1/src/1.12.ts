{
    // nullable types 

    const searchName = (value: string | null) =>{
        if(value){
            console.log('Searching..');
        }else{
            console.log('There is nothing to search!!');
        }
    }
    searchName("search")
    searchName(null)


    // unknown type
    const getSpeedInMeterPerSecond = (value: unknown) =>{
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }

        else if(typeof value === 'string'){
            const [result, unit] = value.split(" ")
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ${unit}`);
        } else{
            console.log("Wrong input.");
        }
    }
    getSpeedInMeterPerSecond(1000)
    getSpeedInMeterPerSecond("1000 kmh^-1")
    getSpeedInMeterPerSecond('null asdf')


    // never type
    function throwError(msg:string): never{
        throw new Error(msg)
    }
    throwError("its not error, its daily work.")

}
