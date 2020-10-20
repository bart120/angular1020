import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { AddCarComponent } from './pages/car/add-car/add-car.component';
import { ListCarComponent } from './pages/car/list-car/list-car.component';
import { HomeComponent } from './pages/home/home/home.component';
import { NotfoundComponent } from './pages/home/notfound/notfound.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'car/list', component: ListCarComponent },
    { path: 'car/add', component: AddCarComponent },

    { path: 'auth/login', component: LoginComponent },

    { path: 'notfound', component: NotfoundComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
