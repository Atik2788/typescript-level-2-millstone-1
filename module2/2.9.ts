{
  // 2-9: Conditional types
    type Sheiksh = {
        bike: string;
        car: string;
        ship: string
    }

    type CheckVehicle <T> = T extends keyof Sheiksh ? true : false;

    type hasPlane = CheckVehicle<"plane">

}
