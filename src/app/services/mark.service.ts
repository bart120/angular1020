import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class MarkService {

    getMarks(): Array<any> {
        return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' }
        ];
    }
}