import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    marks = null;

    constructor() { }

    ngOnInit(): void {
        this.marks = [
            { name: 'Renault' },
            { name: 'Audi' },
            { name: 'BMW' }
        ];
    }
}
