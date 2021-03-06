import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarModel } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http: HttpClient) { }

  getCars(): Observable<Array<CarModel>> {
    return this._http.get<Array<CarModel>>(environment.urlCars);
  }

  getCarById(id: number): Observable<CarModel> {
    return this._http.get<CarModel>(`${environment.urlCars}/${id}`);
  }

  saveCar(car: CarModel): Observable<CarModel> {
    return this._http.post<CarModel>(environment.urlCars, car);
  }
}
