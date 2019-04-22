import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';
import { flatMap } from 'rxjs/operators';
import { HelperService } from './helper.service';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private _httpService: HttpService, private _helperService: HelperService) {
    }

    public getAllStudents(): Observable<Student[]> {
        return of(this._helperService.getItemFromLocalStorage('students'));
    }

    public deleteStudent(studentId: number) {
        let students: Student[] = this._helperService.getItemFromLocalStorage('students');
        const remIdx: number = students.findIndex(stud => stud.id === studentId);
        students = students.filter(stud => +stud.id !== +studentId);
        this._helperService.setItemToLocalStorage('students', students);
    }

    public addUpdateStudent(student: Student) {
        let studentList: Student[] = this._helperService.getItemFromLocalStorage('students');
        const idx = studentList.findIndex(stud => +stud.id === +student.id);
        if (idx === -1) {
            student.id = Date.now();
            studentList.push(student);
            this._helperService.setItemToLocalStorage('students', studentList);
        } else {
            studentList = studentList.filter(stud => +stud.id !== +student.id);
            studentList.push(student);
            this._helperService.setItemToLocalStorage('students', studentList);
        }
    }
}
