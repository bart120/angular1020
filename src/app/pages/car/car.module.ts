import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarComponent } from './list-car/list-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { CarRoutingModule } from './car.routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListCarComponent,
    AddCarComponent,
    DetailCarComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CarModule { }
