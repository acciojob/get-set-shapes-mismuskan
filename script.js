//complete this code
class Rectangle {
	constructor(width,height){
		get width(){
			this.width=width;
		}
		get height{
			this.height=height;
		}
		getArea()
		{
			let area=width*height;
			return area;
		}
	}
}

class Square extends Animal {
	super(height,width)
	getPerimeter(){
		let peri=(2*height)+(2*width);
		return peri;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
