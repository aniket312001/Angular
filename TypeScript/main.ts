import { Point3 } from "./mod";

function doSomething() {
    for(let i=0;i<6;i++){
        console.log(i +" ")
    }    
    console.log("Finally :"+i)
}

doSomething()

//------------------- different type in ts
let n = 5
n='a'   // error for changing datatype but it will run in main.js 

console.log(n)

let a :number
let b : string
let c : boolean
let d : any
let e : number[] = [1,23,4,5]
let f : any[] = ["sam",5, "john"]

console.log(f)

// ---------------------------

enum Color{
    red,  // by defualt value is 0
    black, // 1
    pink=6,  // 2
}

console.log(Color.pink)

let s = "sam"
console.log(s.endsWith('m'))

let ss
ss="efjemwsiogj"
console.log(ss.endsWith('m'))  // we dont get intellisence 
console.log((<string>ss).endsWith('m'))  //now we get intellisence 
console.log((ss as string).endsWith('m'))  //now we get intellisence 


// ----------------------------------------------------------
// arrow function
let doLog = (msg) => console.log(msg)

doLog("huehgokfkea[keoiksvkdjojo")

//---------------------------------------------------------

// let drawPoint = (point:{x:number,y:number})=> {
//     console.log(point)
// }

interface Point{  // Interface are only for delcaration not for implementations
    x:number,
    y:number,
    drow:{}
}

let drawPoint = (point:Point) =>{
    console.log(point)
}

drawPoint({   // function call
    x:5,
    y:8,
    drow(){
        console.log(this.x+this.y)
    }
})


// interface only for declaration but if you want to implement then use class
// Class
class Point2{
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

let p = new Point2(6,7)
p.setX(10)
p.Y=6
console.log(p.X)
console.log(p.draw())


let p4 = new Point3(7,7);
console.log(p4.draw())