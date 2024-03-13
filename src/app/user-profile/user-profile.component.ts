import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EnrolledCourse } from '../models/enrolledCourse.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})


export class UserProfileComponent implements OnInit{
  constructor(private userService:UserService){}
  userId = "81d4b8cf-e198-4663-9447-059f40f0fb98"
  enrolledCourses:EnrolledCourse[] = [];
  ngOnInit(): void {
    this.getUserCourses(this.userId);
  }

  getUserCourses(userId:string):void{
    this.userService.getUserCourses(userId).subscribe((courses:any)=>{
      console.log("enrolled courses:", courses);
      this.enrolledCourses = courses;
    })
  }
  
}
