import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatGridListModule,
        MatCardModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
})
export class SharedModule { }