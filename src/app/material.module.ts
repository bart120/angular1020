import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    /*imports: [
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
    ],*/
    exports: [
        MatIconModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule
    ]
})
export class MaterialModule { }