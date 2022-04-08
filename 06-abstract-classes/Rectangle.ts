import { Shape } from "./Shape";

export class Rectangle extends Shape{

    calculateArea(): number {
        let area : number = this._length * this._width;
        return area;
    }

    getArea(): string{
        return `Area of Rectangle is = ${this.calculateArea()}`;
    }

    constructor(theX: number, theY: number,
                private _width: number, private _length: number){
        super(theX, theY);
    }
    
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    } 
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width is=${this._width} and length is=${this._length}`;
    }

}