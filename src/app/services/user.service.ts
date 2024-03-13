import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class UserService{
    constructor(private http:HttpClient){}
    baseUrl = "http://localhost:7000";

    getUserCourses(userId:string){
        return this.http.get(`${this.baseUrl}/enroll/course/${userId}`);
    }

    enrollUser(userId:string,courseId:number){
        const body ={userId, courseId}
        return this.http.post(`${this.baseUrl}/enroll/course`, body);
    }

    unEnrollUser(userId:string,courseId:number){
        const body ={userId, courseId};
        return this.http.post(`${this.baseUrl}/enroll/unroll/course`, body);
    }
}