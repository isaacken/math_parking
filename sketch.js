let bg, car, timer,trophy, font;
let park = new Array();
let incog;
let count = 10, counter;
let i;
let pontuacoes = new Array();
let pontuacao = 0;
let nome = "";
let tabela;
let color = [255,255,255,150];

function preload() {
	bg = loadImage("bg.jpg");
	car = loadImage("car.png");	
	timer = loadImage("timer.png");
	trophy = loadImage("trophy.png");
}

function setup() {
	createCanvas(1200,600);
	tabela = createElement('table');
	tabela.position(1220,20);	
	newStage();
}

function draw() {
	if (count == 0) check();
	// put drawing code here
	drawParking();	
	setPark(0,park[0],incog);
	setPark(1,park[1],incog);
	setPark(2,park[2],incog);
	
	push();

		rectMode(CENTER);
		noFill();
		strokeWeight(3);
		stroke(color[0],color[1],color[2],color[3]);	
		rect(width/2,height/2+50,500,150,20);

		fill(255);
		noStroke();
		textSize(60);
		textAlign(CENTER,CENTER);
		text(count+"s",width/2+180,height/2+50);
		imageMode(CENTER);
		image(timer,width/2+80,height/2+50,75,75);

		fill(255);
		noStroke();
		textSize(60);
		textAlign(CENTER,CENTER);
		text(pontuacao,width/2-90,height/2+50);
		imageMode(CENTER);
		image(trophy,width/2-180,height/2+50,75,75);

	pop();

	c.show();
	c.move();		
}