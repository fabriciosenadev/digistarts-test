import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  amountInteger: Number;

  stringOfInteger: String;

  showClearArray;

  constructor() { }

  ngOnInit(): void {
  }

  submitData() {
    let arrayRaw = this.stringOfInteger.split(',').map(Number);

    let arrayOfInteger = this.removeNanValues(arrayRaw);

    let arrayFiltered = this.removeDuplicatedValues(arrayOfInteger)

    let arraySorted = this.sortValues(arrayFiltered);

    if (this.amountInteger !== arrayOfInteger.length) {
      console.log('something went wrong');
      return false;
    }

    this.showClearArray = arraySorted;
  }

  removeNanValues(array) {
    return array.filter(function (value) {
      return !Number.isNaN(value);
    });
  }

  removeDuplicatedValues(array) {
    return array.filter(function (elem, index, self) {
      return index === self.indexOf(elem);
    });
  }

  sortValues(array) {
    return array.sort(function (a, b) { return a - b });
  }
}
