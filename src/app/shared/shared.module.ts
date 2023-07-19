import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { RedesComponent } from './components/redes/redes.component';



@NgModule({
  declarations: [
    MenuComponent,
    CardComponent,
    RedesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    RedesComponent
  ],
  providers: [
    CardComponent
  ]
})
export class SharedModule { }
