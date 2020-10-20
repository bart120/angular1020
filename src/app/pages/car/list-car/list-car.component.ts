import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarModel } from 'src/app/models/car.model';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styles: [
  ]
})
export class ListCarComponent implements OnInit {

  cars: Array<CarModel>;

  constructor(private _servCar: CarService) { }

  ngOnInit(): void {

    this._servCar.getCars().subscribe(data => {
      this.cars = data;
    });
  }

}
