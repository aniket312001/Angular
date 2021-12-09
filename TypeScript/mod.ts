export class Point3{
    // private x: number
    // private y: number

    // constructor(x?:number,y?:number){  // ? is optional 
    //     this.x = x
    //     this.y = y
    // }
    constructor(public x:number,private y:number){}  //no need to declare x,y and asign value this.x 


    draw(){
        return this.x+this.y
    }
    getDistance(){
        return (this.x+this.y)/2
    }

    setX(value){
        if(value<0){
            throw new Error("should be greater then 0")
        }
        this.x = value
    }

    set Y(value){
        this.y= value
    }

    get X(){
        return this.x
    }
}