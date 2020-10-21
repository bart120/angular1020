import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { MarkModel } from 'src/app/models/mark.model';
import { CarService } from 'src/app/services/car.service';
import { MarkService } from 'src/app/services/mark.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styles: [
  ]
})
export class AddCarComponent implements OnInit {

  formCar: FormGroup;
  marks$: Observable<Array<MarkModel>>;

  constructor(private _servMark: MarkService,
    private _servCar: CarService,
    private _snack: MatSnackBar,
    private _router: Router) { }

  ngOnInit(): void {
    this.marks$ = this._servMark.getMarks();

    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      markID: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formCar.valid) {
      let car = this.formCar.value as CarModel;
      car.price = +car.price;
      //console.log(this.formCar.value as CarModel);
      this._servCar.saveCar(car).subscribe(data => {
        this._snack.open(`La voiture est enregistrée avec l'id ${data.id}`, 'OK');
        this._router.navigate(['/car/list']);
      });
    }
  }

}
