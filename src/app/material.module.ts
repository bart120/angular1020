import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    ]
})
export class MaterialModule { }