// A Vector Type
console.log("A Vector Type :".toUpperCase() + "\n\n");

function Vector(x,y){
	this.x = x;
	this.y = y;
}

Object.defineProperty(Vector.prototype, "plus",
					{enumerable: false, 
						value: function(v){
							return new Vector(this.x+v.x, this.y+v.y);
					}});

Object.defineProperty(Vector.prototype, "minus",
					{enumerable: false, 
						value: function(v){return new Vector(this.x-v.x, this.y-v.y);}
					});

Object.defineProperty(Vector.prototype, "length",
						{get: function(){
							return Math.sqrt(this.x*this.x + this.y*this.y);}
						});

var v1 = new Vector(1,2);

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3,4).length);
console.log("==========================================================");

// Another Cell
console.log("Another Cell :".toUpperCase() + "\n\n");
console.log(new TextCell("abc"));

function StretchCell(inner, width, height){
	this.inner = inner;
	this.width = width;
	this.height = height;
}

StretchCell.prototype.minWidth = function(){
	return Math.max(this.width, this.inner.minWidth());
};

StretchCell.prototype.minHeight = function(){
	return Math.max(this.height, this.inner.minHeight());
};

StretchCell.prototype.draw = function(width,height){
	return this.inner.draw(width,height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));
console.log("==========================================================");

// Sequence Interface
console.log("Sequence Interface:".toUpperCase() + "\n\n");

function ArraySeq(array){
	this.index = 0;
	this.array = array;
}

ArraySeq.prototype.continue = function(){
	if(this.index > this.array.length-1){
		return false;
	}
	this.index++;
	return true;
}

ArraySeq.prototype.print = function(){
	return this.array[this.index-1];
}

function logFive(seq){
	for(var i = 0; i <5; i++){
		if(!seq.continue()){
			break;
		}
		else{
			console.log(seq.print());
		}
	}
}

logFive(new ArraySeq([1, 2]));


function RangeSeq(start, end){
	this.index = 0;
	this.array = [];
	for(var i = 0; i<=end-start; i++){
		this.array.push(start+i);
	}
}

RangeSeq.prototype.continue = function(){
	if(this.index > this.array.length-1){
		return false;
	}
	this.index++;
	return true;
}

RangeSeq.prototype.print = function(){
	return this.array[this.index-1];
}

logFive(new RangeSeq(100, 1000));
console.log("==========================================================");
