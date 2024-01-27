class Rectangle {
	constructor(width,height){
			this.width=width;
			this.height=height;
	}		
		get getWidth(){
			return this.width;
		}
		get getHeight(){
		return this.height;
		}
		getArea()
		{
			let area=this.width*this.height;
			return area;
		}
	}


class Square extends Rectangle {
	constructor(side)
	{
	super(side,side);
	}
	getPerimeter(){
		let peri=4*this.getWidth;
		return peri;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
