import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CourseService {
    constructor(private http:HttpClient){}

    baseUrl = "http://localhost:7000";

    getCourses(){
        return this.http.get(`${this.baseUrl}/course`);
    }
}