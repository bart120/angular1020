import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarModel } from 'src/app/models/car.model';
import { MarkService } from 'src/app/services/mark.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styles: [
  ]
})
export class ListCarComponent implements OnInit {

  cars: Array<CarModel>;

  constructor(private _servCar: CarService, private _servMark: MarkService) { }

  ngOnInit(): void {

    this._servCar.getCars().subscribe(data => {
      for (const car of data) {
        this._servMark.getMarkById(car.markID).subscribe(dt => {
          car.mark = dt;
        });
      }
      this.cars = data;
    });

    /*this._servCar.getCars().pipe(map(x =>
      x.map(car =>
        this._servMark.getMarkById(car.markID).subscribe(dt => car.mark = dt)
      ))).subscribe(data => this.cars = data);*/

  }

}
