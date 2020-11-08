import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

  operations = [
    { value: '+', text: '+' },
    { value: '-', text: '-' },
    { value: '*', text: '*' },
    { value: '/', text: '/' },
    { value: '%', text: '%' },
  ];

  operation: string;
  firstBinary: string;
  secondBinary: string;
  resultBinary: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitData() {
    let firstNumber = this.convertToDecimal(this.firstBinary);
    let secondNumber = this.convertToDecimal(this.secondBinary);

    let FirstNumberIsValid = firstNumber >= 0 && firstNumber <= 255;
    let SecondNumberIsValid = secondNumber >= 0 && secondNumber <= 255;
    if (FirstNumberIsValid && SecondNumberIsValid) {
      let resultCalculation = this.calculate(firstNumber, secondNumber, this.operation);
      this.resultBinary = this.convertToBinary(resultCalculation);
    }
  }

  convertToDecimal(binary: string) {
    return parseInt(binary, 2);
  }

  convertToBinary(number: number) {
    return number.toString(2);
  }

  calculate(
    firstNumber: number,
    secondNumber: number,
    operation: string
  ) {
    switch (operation) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      case "/":
        return firstNumber / secondNumber;
      case "%":
        return firstNumber % secondNumber;
    }
  }
}
