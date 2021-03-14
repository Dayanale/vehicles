//import { Wheel } from "../models/wheel"

class Car{
    public plate:string;
    public color:string;
    public brand:string;
    public wheels:Wheel[]=new Array();
    
    public constructor(plate:string,color:string,brand:string){
        this.plate=plate;
        this.color=color;
        this.brand=brand;
    }
    
    public addWheel(wheel:Wheel):void{
        this.wheels.push(wheel);
    }
}
console.log('hola car.ts');