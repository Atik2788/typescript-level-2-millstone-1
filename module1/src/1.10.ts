{
    // Union Type *********************
    // Union Type *********************

    type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper"
    type FullStackDeveloper = "FrontendDeveloper" | "ExpertDeveloper"
    
    type Developer = FrontendDeveloper | FullStackDeveloper;

    const newDeveloper: FrontendDeveloper = "JuniorDeveloper"



    type User={
        name: string;
        email?: string;
        gender: "male" | "felame" // Union Type
        bloodGroup: "O+" | "A+" | "AB+"
    }

    const user1: User ={
        name: "Persian",
        gender: "male",
        bloodGroup: 'O+'
    }


    // Intersection Type****************
    // Intersection Type****************

    type FrontendDeveloper2 = {
        skills: string[];
        designation1: "Frontend Developer"
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "BackendDeveloper"
    }

    type FullStackDeveloper2 = FrontendDeveloper2 & BackendDeveloper //intersection types

    const fullStackDeveloper: FullStackDeveloper2 = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "BackendDeveloper"
    }


}