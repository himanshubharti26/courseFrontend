import { Routes } from '@angular/router';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component: CourseCatalogComponent},
    {path:"user/:id", component: UserProfileComponent},
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }

];
