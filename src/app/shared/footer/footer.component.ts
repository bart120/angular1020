import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    marks = null;

    constructor() { }

    ngOnInit(): void {
        /*this.marks = [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' }
        ];*/
    }

    addData(): void {
        this.marks = [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' }
        ];
    }
}
