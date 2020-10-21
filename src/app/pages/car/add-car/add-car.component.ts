import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car.model';
import { MarkModel } from 'src/app/models/mark.model';
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

  constructor(private _servMark: MarkService) { }

  ngOnInit(): void {
    this.marks$ = this._servMark.getMarks();

    this.formCar = new FormGroup({
      model: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]*$/)]),
      dateOfCirculation: new FormControl('', [Validators.required]),
      markID: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.formCar.valid) {
      console.log(this.formCar.value as CarModel);
    }
  }

}
