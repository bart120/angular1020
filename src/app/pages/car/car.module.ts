import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarComponent } from './list-car/list-car.component';
import { AddCarComponent } from './add-car/add-car.component';



@NgModule({
  declarations: [
    ListCarComponent,
    AddCarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarModule { }
