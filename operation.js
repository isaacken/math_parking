class Operation {
	constructor() {
		this.op1 = parseInt(random(1,9));
		this.op2 = parseInt(random(1,9));
		this.signal = parseInt(random(2));

		switch (this.signal) {
			case 0:
				this.signal = '+';
				this.result = this.op1 + this.op2;
				break;
			case 1:
				this.signal = '-';
				this.result = this.op1 - this.op2;
				break;
			case 2:
				this.signal = '*';
				this.result = this.op1 * this.op2;
				break;
		}
	}
}
