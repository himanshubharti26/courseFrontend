import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCatalogComponent } from './course-catalog/course-catalog.component';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
// import { SampleComponent } from './sample/sample.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseCatalogComponent,HttpClientModule, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'course-catalog';
 
}
