import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EnrolledCourse } from '../models/enrolledCourse.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})


export class UserProfileComponent implements OnInit {

  constructor(private userService: UserService) { }
  userId = "156bfff1-2776-482e-821d-3f310e604557"
  enrolledCourses: EnrolledCourse[] = [];
  totastMessage: string = "";
  showMessage:boolean = false;

  ngOnInit(): void {
    this.getUserCourses(this.userId);
  }

  getUserCourses(userId: string): void {
    this.userService.getUserCourses(userId).subscribe((courses: any) => {
      console.log("enrolled courses:", courses);
      this.enrolledCourses = courses;
    })
  }

  unEnrollUser(courseId: number, title: string) {
    console.log("in enroll function");
    this.userService.unEnrollUser(this.userId, courseId).subscribe(data => {
      console.log("Unenrolled successfully", data);
      this.totastMessage = `Unenrolled from ${title}  successfully !!!`;
      this.showToast()
      this.getUserCourses(this.userId);
    });
  }
  showToast(){
    this.showMessage= true;
    setTimeout(()=>{
      this.showMessage= false;
    }, 5000);
  }
}
