import { Routes } from '@angular/router';
import { HomeComponent } from './pagina/home/home.component';
import { AdminComponent } from './pagina/admin/admin.component';

export const routes: Routes = [

    {path: 'home', component:HomeComponent},
    {path: 'admin', component:AdminComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}


];
