import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ButtonDemoComponent } from './button/button-demo.component';
// import { Home}

@NgModule({
  imports: [
    RouterModule.forRoot([{
      path: 'button',
      component: ButtonDemoComponent
      // loadChildren: './button/button-demo.module#ButtonDemoModule'
    }])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
