import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarkModel } from 'src/app/models/mark.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class MarkService {

    constructor(private _http: HttpClient) { }

    getMarks(): Observable<Array<MarkModel>> {
        /* this._http.get<Array<MarkModel>>(environment.urlMarks).subscribe((data) => {
             console.log('return data', data);
             return data;
         }, (err) => {
             console.warn(err.message);
         });*/

        return this._http.get<Array<MarkModel>>(environment.urlMarks);
        /*return [
            { name: 'Renault', image: 'renault.jpg' },
            { name: 'Audi', image: 'audi.jpg' },
            { name: 'BMW', image: 'bmw.jpg' }
        ];*/
    }

    getMarkById(id: number): Observable<MarkModel> {
        return this._http.get<MarkModel>(`${environment.urlMarks}/${id}`);
    }
}