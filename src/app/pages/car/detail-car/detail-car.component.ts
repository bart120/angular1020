import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/car.service';
import { map, mergeMap } from 'rxjs/operators';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styles: [
  ]
})
export class DetailCarComponent implements OnInit {

  obsCar$: Observable<CarModel>;

  constructor(private _servCar: CarService,
    private _servMark: MarkService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: number = this._route.snapshot.params.id;

    this.obsCar$ = this._servCar.getCarById(id).pipe(map(car => {
      car.mark = this._servMark.getMarkById(car.markID);
      return car;
    }));
  }

}
