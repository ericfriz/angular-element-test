import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, OnChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'app-counter-test',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CounterComponent implements OnInit, OnChanges {

 public _counter = 0;

  @Input()
  set counter(counter: number) {
    this._counter = counter;
  }
  get counter(): number {
    return this._counter;
  }
  
  @Output() counterEmitter = new EventEmitter<number>();

  constructor() { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }
  increase() {
    this._counter++;
    console.log("increase. counter= " + this._counter);
     this.counterEmitter.emit(this._counter);
  }

  descrease() {
    this._counter--;
    console.log("descrease. counter= " + this._counter);
     this.counterEmitter.emit(this._counter);
  }
}