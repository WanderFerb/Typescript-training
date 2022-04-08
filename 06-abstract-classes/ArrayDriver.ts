import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5,10,15);
//console.log(myCircle.getInfo());

let myRectangle = new Rectangle(5,10,15,20);
//console.log(myRectangle.getInfo());


//declaring array of shapes 
let theShapes : Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShapes of theShapes){
    console.log(tempShapes.getInfo())
    console.log(tempShapes.getArea());
    console.log();
}