//Classes and inheritance 

//a
abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;

    get color(){return this._color}
    set color(color:string){this._color = color}

     public toString(): string{
         return 'Color of the shape is ${this._color'
     }

    }

    // let triangle = new Shape("gold");
    // Cannot create an instance since it is an abstract class that is not extended by a subclass
    

  //b
   class Circle extends Shape {

        private _radius: number;
        constructor(color: string, radius: number){
            super(color);
            this.color = super.color;
            this._radius = radius;
        }

    get radius(){return this.radius}
    set radius(radius: number){this.radius = radius}

    get area(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
    
    get perimeter(): number {
           return 2 * this.radius * Math.PI;
       }
  

    public toString(): string{
        return 'Color of the shape is ${this._color} and the radius is ${this.radius}.';
    }
}

let circle = new Circle("White", 20);
console.log(circle)
console.log("Area:", circle.area)
console.log(circle.toString)

    //c

    class Cylinder extends Shape{
        private _radius: number;
        private _height: number;
        constructor(color: string, radius: number, height: number){
            super(color);
            this.color = super.color;
            this._radius = radius;
            this._height = height;
        }

        get radius(){return this._radius}
        set radius(radius: number){this._radius = radius}
        get height(){return this._height}
        set height(height: number){this._height = this.height}

        get area(): number {
            return Math.PI * Math.pow(this._radius, 2) * (this.radius + this._height);
        }
        get perimeter(): number {
            throw new Error("Method not implemented.")
        }

        get volume(): number{
            return this._height * Math.PI * Math.pow(this.radius, 2)
        }
        
    }

    let cylinder = new Cylinder("Yellow", 30, 3);
    console.log(cylinder)
    console.log("Volume", cylinder.volume)
    

   
  