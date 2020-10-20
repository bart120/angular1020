import { Component, OnInit } from '@angular/core';
import { MarkModel } from 'src/app/models/mark.model';
import { MarkService } from 'src/app/services/mark.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    marks: Array<MarkModel> = null;
    //private _servMark: MarkService;

    constructor(private _servMark: MarkService) {
        //this._servMark = servMark
    }

    ngOnInit(): void {
        /*this.marks = [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' }
        ];*/
        //console.log('appel service mark');
        //this.marks = this._servMark.getMarks();
        //console.log('fin ngoninit');

        this._servMark.getMarks().subscribe(data => {
            this.marks = data;
        });
    }

    addData(): void {
        //this.marks = 
    }
}
