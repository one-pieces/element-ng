import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponentModule } from '../../components/button/button.component';
import { ButtonDemoComponent } from './button-demo.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonComponentModule
  ],
  declarations: [
    ButtonDemoComponent
  ]
})
export class ButtonDemoModule {}
