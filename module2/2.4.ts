{
    // interface - generic

    interface Developer<T, X = null>{
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: Number;
        };
        smartWatch: T;
        bike?: X
    }


    interface EmilabWatch {
        brand: string;
        model: string;
        display: string;
    
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Persian",
        computer: {
            brand: 'Asus',
            model: "X-255ur",
            releaseYear: 2013,
        },
        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "OLED"
        }
    }
    



    type AppleWatch = {
        brand: string;
        model: string;
        hertTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike{
        model: string;
        engineCapacity:string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: "Persian",
        computer: {
            brand: 'HP',
            model: "X-25ur",
            releaseYear: 2019,
        },
        smartWatch: {
            brand: "Apple",
            model: "kw66",
            hertTrack: true,
            sleepTrack: true
        },
        bike: {
            model: "Yamaha",
            engineCapacity: "165cc"
        }
    }


}