import { Component } from '@angular/core';

@Component({
  templateUrl: './button-demo.component.html'
})
export class ButtonDemoComponent {
  clicks = 0;

  count() {
    this.clicks++;
  }
}
