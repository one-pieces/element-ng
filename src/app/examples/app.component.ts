import { Component } from '@angular/core';

@Component({
  selector: 'op-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuActive: boolean;
  activeMenuId: string;

  onMenuButtonClick(event: Event) {
    this.menuActive = !this.menuActive;
    event.preventDefault();
  }
}
