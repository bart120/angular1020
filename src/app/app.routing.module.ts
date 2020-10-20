import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './pages/car/add-car/add-car.component';
import { ListCarComponent } from './pages/car/list-car/list-car.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotfoundComponent } from './pages/home/notfound/notfound.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },

    /*{
        path: 'car', children: [
            { path: 'list', component: ListCarComponent },
            { path: 'add', component: AddCarComponent },
        ]
    },*/
    { path: 'car', loadChildren: () => import('./pages/car/car.module').then(x => x.CarModule) },

    //{ path: 'auth/login', component: LoginComponent },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(x => x.AuthModule) },

    { path: 'notfound', component: NotfoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
