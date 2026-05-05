//conditional type

type A = null;
type B = undefined;
type C = A extends number ? true : B extends undefined ? true : false;

type RichpeopleVichle = {
    bike: string;
    car: string;
    ship: string,

}


type checkVechile<T> = T extends "bike" | "car" | "ship" ? true : false

type hasbike = checkVechile<"ship">;

