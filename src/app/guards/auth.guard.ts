import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _snack: MatSnackBar,
        private _router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (sessionStorage.getItem('USER') != null) {
            return true;
        } else {
            this._snack.open('Accès interdit', 'OK');
            this._router.navigate(['/auth/login']);
            return false;
        }
    }
}
