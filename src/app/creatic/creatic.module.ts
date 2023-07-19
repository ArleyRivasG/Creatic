import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreaticRoutingModule } from './creatic-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DescriptionComponent } from './components/description/description.component';
import { ContactComponent } from './components/contact/contact.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    DescriptionComponent,
    ContactComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CreaticRoutingModule, 
    SharedModule
  ]
})
export class CreaticModule { }
