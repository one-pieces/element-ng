import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ButtonComponentModule } from '../../components';
// import { ButtonComponentModule } from '../../../../components';
import { ButtonComponentModule } from '../../../../index';
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
