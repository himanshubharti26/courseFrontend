import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course.model';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './course-catalog.component.html',
  styleUrl: './course-catalog.component.css',
})
export class CourseCatalogComponent implements OnInit {
  
  
  courses:Course[] = [];
  filteredCourses:Course[] = [];
  searchTerm:string = "";
  constructor(private courseService:CourseService){}
  ngOnInit():void{
    this.getCourses()
  }

  getCourses():void{
    this.courseService.getCourses().subscribe((courses:any) => {
      console.log("courses",courses)
      this.courses = courses;
      this.filteredCourses = [...courses];
    }, (err)=>{
      console.log("error in fetching data", err);
    });
  }

  
  searchCourses(): void {
    if (!this.searchTerm) {
      this.filteredCourses = [...this.courses];
      return;
    }
    console.log("search term:", this.searchTerm);
    this.filteredCourses = this.courses.filter(course =>
      course.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  filterCourses(filterBy: string): void {
    // Implement filter logic based on filterBy
    console.log("filterby ", filterBy)
    switch (filterBy) {
      case 'price':
        console.log("in price")
        this.filteredCourses = this.filteredCourses.sort((a, b) => a.price - b.price);
        break;
      case 'rating':
        console.log("in rating")
        this.filteredCourses = this.filteredCourses.sort((a, b) => b.rating - a.rating);
        break;
      case 'category':
        console.log("in category")
        this.filteredCourses = this.filteredCourses.sort((a, b) => a.category.localeCompare(b.category));
        break;
      default:
        break;
    }
  }
}
