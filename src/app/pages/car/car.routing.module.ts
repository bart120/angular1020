import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ListCarComponent } from './list-car/list-car.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
    { path: 'add', component: AddCarComponent, canActivate: [AuthGuard] },
    { path: 'list', component: ListCarComponent },
    { path: 'detail/:id', component: DetailCarComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarRoutingModule { }
