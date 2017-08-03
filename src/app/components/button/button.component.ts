import {NgModule, AfterViewInit, OnDestroy, Component, ElementRef} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'op-button',
  template: `
    <button><ng-content></ng-content></button>
  `
})
export class ButtonComponent implements AfterViewInit, OnDestroy {
  text = '';
  constructor(public el: ElementRef) {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent],
  declarations: [ButtonComponent]
})
export class ButtonComponentModule { }
