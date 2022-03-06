// Add your Circle class here
class Circle{
    constructor(radius){
        this._radius = radius
    }

    get radius(){
        return this._radius
    }

    set radius(newRadius){
        if(newRadius > 0) this._radius = newRadius
        else console.log("Radius should e greater than zero")
    }

    get area(){
        return (Math.PI * this._radius ** 2).toFixed(2)
    }

    set area(a){
        if(a > 0)this._radius = Math.sqrt(a/Math.PI)
        else console.log("Area should e greater than zero")
    }

    get circumfrance(){
        return (Math.PI * this._radius * 2).toFixed(2)
    }

    set circumfrance(c){
        if (c > 0) this._radius = (c/(Math.PI * 2)).toFixed(2)
        else console.log("Circumfrance should e greater than zero")
    }

    set diameter(d){
        if (d > 0) this._radius = d/2
        else console.log("Diameter should e greater than zero")
    }

    get diameter(){
        return this._radius * 2
    }

}

