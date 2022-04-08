import { Shape } from "./Shape";

export class Circle extends Shape{
    calculateArea(): number {
        let area : number = Math.PI * Math.pow(this._radius, 2);
        return area;
    }

    getArea(): string{
        return `Area of circle is = ${this.calculateArea()}`;
    }

   
   constructor(theX:number, theY: number,
     private _radius: number){
         super(theX, theY);
     }
   
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return super.getInfo() + `, Radius is=${this._radius}`;
    }


}