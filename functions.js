function drawParking () {
	image(bg,0,0,2400,1200);
	fill(0,0,0,150);
	rect(0,0,2400,1200);

	noStroke();
	fill(255);

	//ESTACIONAMENTO DA ESQUERDA (0)
	//RESULTADO
	rect(0,20,200,7); 
	rect(0,120,200,7);
	//IGUAL
	rect(0,220,200,7);
	//OP 2
	rect(0,320,200,7);
	//SINAL
	rect(0,420,200,7);
	//OP 1
	rect(0,520,200,7);

	//ESTACIONAMENTO DA DIREITA (2)
	//OP 1
	rect(1000,20,200,7);
	rect(1000,120,200,7);
	//SINAL
	rect(1000,220,200,7);
	//OP 2
	rect(1000,320,200,7);
	//IGUAL
	rect(1000,420,200,7);
	//RESULTADO
	rect(1000,520,200,7);


	//ESTACIONAMENTO DO MEIO (1)
	//OP 1
	rect(358,0,7,200);  
	rect(458,0,7,200);  
	//SINAL
	rect(558,0,7,200);  
	//OP 2
	rect(658,0,7,200);  
	//IGUAL
	rect(758,0,7,200);  
	//RESULTADO
	rect(858,0,7,200);  

	fill(255,255,0);
	rect(10,10,7,525);
	rect(1183,10,7,525);
	rect(1183,10,7,525);
	rect(348,10,525,7);
}

function newStage() {
	do {
		park[0] = new Operation();
		park[1] = new Operation();
		park[2] = new Operation();
	} while (
		((park[0].op1 == park[1].op1 || park[0].op2 == park[1].op2) && park[0].signal == park[1].signal) ||
		((park[0].op1 == park[2].op1 || park[0].op2 == park[2].op2) && park[0].signal == park[2].signal) ||
		((park[2].op1 == park[1].op1 || park[2].op2 == park[1].op2) && park[2].signal == park[1].signal)
	);

	i = parseInt(random(3));
	let p = park[i];

	do {
		incog = parseInt(random(0,3));
	} while (
		(incog==0&&(park[0].op1 == park[1].op1||park[0].op1 == park[2].op1||park[1].op1 == park[2].op1))||
		(incog==1&&(park[0].op2 == park[1].op2||park[0].op2 == park[2].op2||park[1].op2 == park[2].op2))||
		(incog==2&&(park[0].result == park[1].result||park[0].result == park[2].result||park[1].result == park[2].result))
	);

	switch (incog) {
		case 0:
			c = new Car(p.op1,i,"op1");
		break;
		case 1:
			c = new Car(p.op2,i,"op2");
		break;
		case 2:
			c = new Car(p.result,i,"result");
		break;
	}

	clearInterval(counter);

	counter = setInterval(function () {
		count--;
		if (count == 0) clearInterval(counter);
	},1000);
}

function setPark(i,p,inc) {
	switch (i) {
		case 0:
			push();
				translate(width/2,height/2);
				rotate(PI+HALF_PI);
				fill(255);
				textSize(80);
				textAlign(CENTER,CENTER);

				if (inc == 0) {
					fill(255,80);
					text("?",-175,-490);
					fill(255);
				} else {
					text(p.op1,-175,-490);
				}

				text(p.signal,-75,-490);

				if (inc == 1) {
					fill(255,80);
					text("?", 25,-490);
					fill(255);
				} else {
					text(p.op2, 25,-490);
				}

				text("=",125,-490);

				if (inc == 2) {
					fill(255,80);
					text("?",225,-490);
					fill(255);
				} else {
					text(p.result,225,-490);
				}

			pop();
		break;
		case 1:
			push();
				fill(255);
				textSize(80);
				textAlign(CENTER,CENTER);

				if (inc == 0) {
					fill(255,80);
					text("?",410,100);
					fill(255);
				} else {
					text(p.op1,410,100);
				}

				text(p.signal,510,100);

				if (inc == 1) {
					fill(255,80);
					text("?",610,100);
					fill(255);
				} else {
					text(p.op2,610,100);
				}

				text("=",710,100);

				if (inc == 2) {
					fill(255,80);
					text("?",810,100);
					fill(255);
				} else {
					text(p.result,810,100);
				}
			pop();
		break;
		case 2:
			push();
				translate(width/2,height/2);
				rotate(HALF_PI);
				fill(255);
				textSize(80);
				textAlign(CENTER,CENTER);

				if (inc == 0) {
					fill(255,80);
					text("?",-225,-490);
					fill(255);
				} else {
					text(p.op1,-225,-490);
				}

				text(p.signal,-125,-490);

				if (inc == 1) {
					fill(255,80);
					text("?", -25,-490);
					fill(255);
				} else {
					text(p.op2, -25,-490);
				}

				text("=",75,-490);

				if (inc == 2) {
					fill(255,80);
					text("?",175,-490);
					fill(255);
				} else {
					text(p.result,175,-490);
				}
			pop();
		break;				
	}
}

function keyPressed() {
	if (keyCode === ENTER || keyCode === 32) { //32 = SPACEBAR
		check();
	}
}

function check() {
		clearInterval(counter);
		let acerto = true;
		switch (i) {
			case 0:
				switch (incog) {
					case 0:
						if (c.x < 140 && c.y >= 440 && c.y <= 500) acerto = true;
						else acerto = false;
					break;
					case 1:
						if (c.x < 140 && c.y >= 240 && c.y <= 300) acerto = true;
						else acerto = false;
					break;
					case 2:
						if (c.x < 140 && c.y >= 40 && c.y <= 100) acerto = true;
						else acerto = false;
					break;
				}
			break;
			case 1:
				switch (incog) {
					case 0:
						if (c.y < 140 && c.x >= 378 && c.x <= 438) acerto = true;
						else acerto = false;
					break;
					case 1:
						if (c.y < 140 && c.x >= 578 && c.x <= 638) acerto = true;
						else acerto = false;
					break;
					case 2:
						if (c.y < 140 && c.x >= 778 && c.x <= 838) acerto = true;
						else acerto = false;
					break;
				}
			break;
			case 2:
				switch (incog) {
					case 0:
						if (c.x > 1060 && c.y >= 40 && c.y <= 100) acerto = true;
						else acerto = false;
					break;
					case 1:
						if (c.x > 1060 && c.y >= 240 && c.y <= 300) acerto = true;
						else acerto = false;
					break;
					case 2:
						if (c.x > 1060 && c.y >= 440 && c.y <= 500) acerto = true;
						else acerto = false;
					break;
				}
			break;
		}

		if (acerto) {
			if (count>0) pontuacao+=count;
			else pontuacao++;
			count = 10;
			color = [0,255,0,150];
			setTimeout(function() {
				color = [255,255,255,150];
			},500);
			newStage();
		} else {
			reset();
			newStage();
		}
}

function reset () {
	nome = prompt("Insira seu nome");
	pontuacoes.push([nome,pontuacao]);
	count = 10;
	pontuacao=0;	
	newStage();
	plotRecords();
}

function plotRecords() {
	pontuacoes.sort(function(a, b) {
	  return b[1] - a[1];
	});

	let aux = "<tr><th colspan='2'>Recordes</th></tr><tr><th>Nome</th><th>Pontos</th></tr>";
	for (i = 0; i < pontuacoes.length; i++) {
		aux += "<tr>";
		aux += "<td>"+pontuacoes[i][0]+"</td>";
		aux += "<td>"+pontuacoes[i][1]+"</td>";
		aux += "</tr>";
	}

	tabela.html(aux);
}