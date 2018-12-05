class Car {
	constructor(number,parkIndex,pos) {
		this.x = 613;
		this.y = 490;
		this.speed = 6;

		this.number = number;
		this.direction = 'f';
		this.parkIndex = parkIndex;
		this.pos = pos;
	}

	move() {
		if (keyIsDown(DOWN_ARROW) && this.y < 520) {
			this.direction = 'b';
			c.y+=this.speed;
		} else if (keyIsDown(UP_ARROW) && this.y > 80) {
			this.direction = 'f';
			c.y-=this.speed;
		} else if (keyIsDown(RIGHT_ARROW) && this.x < 1120) {
			this.direction = 'r';
			c.x+=this.speed;
		} else if (keyIsDown(LEFT_ARROW) && this.x > 80) {
			this.direction = 'l';
			c.x-=this.speed;
		}
	}

	show() {
		push();
		translate(this.x,this.y);
		
		if (this.direction == 'r') {
			rotate(HALF_PI);
		} else if (this.direction == 'l') {
			rotate(-HALF_PI);
		} else if (this.direction == 'b') {
			rotate(PI);	
		}

		imageMode(CENTER);
		image(car,0,0,80,160);
		fill(255);
		textAlign(CENTER,CENTER);
		textSize(32);
		text(this.number,0,10);	
		textSize(20);
		text("_",0,20);			

		pop();	
	}
}