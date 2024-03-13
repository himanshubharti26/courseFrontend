import { Routes } from '@angular/router';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: CourseCatalogComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];
