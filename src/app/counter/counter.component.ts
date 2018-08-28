import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter,
  OnChanges, HostBinding, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-counter-test',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  // encapsulation: ViewEncapsulation.Native
  // with the encapsulation, the example doesn't work in IE11.
})
export class CounterComponent implements OnInit, OnChanges {  // , AfterViewChecked


 public _counter = 0;

  @Input()
  set counter(counter: number) {
    this._counter = counter;
  }
  get counter(): number {
    return this._counter;
  }

  @Output() counterEmitter = new EventEmitter<number>();

  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    console.log('constructor');
  }

  // ngAfterViewChecked() {
    /* This way the detector will run after every change */
 //   this._changeDetectorRef.detectChanges();
 // }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges() {
    console.log('ngOnChanges');
  }
  increase() {
    this._counter++;
        /* This way you run detector only on this function call */
        this._changeDetectorRef.detectChanges();

    console.log('increase. counter= ' + this._counter);
     this.counterEmitter.emit(this._counter);
  }

  descrease() {
    this._counter--;
    console.log('descrease. counter= ' + this._counter);
    /* This way you run detector only on this function call */
    this._changeDetectorRef.detectChanges();
     this.counterEmitter.emit(this._counter);
  }
}
