import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { ListDisplayOptions } from 'src/app/shared/enums/list-display-options.enum';
import { StudentType } from 'src/app/shared/enums/student-type.enum';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
    public students: Student[];
    public selectedDisplayOption: ListDisplayOptions;
    public selectedDisplayOptionText: string;
    public ListDisplayOptions = ListDisplayOptions;
    public searchByName: string;
    private _allStudentList: Student[];

    constructor(private _studentService: StudentService) {

    }
    ngOnInit() {
        this.loadStudents();
    }
    public loadStudents() {
        this._studentService.getAllStudents().subscribe(data => {
            this._allStudentList = data;
            this.selectedDisplayOption = ListDisplayOptions.All;
            this.students = this._allStudentList;
            this.selectedDisplayOptionText = 'All';
        });
    }

    public setDisplayOption(listDisplayOptions: ListDisplayOptions) {
        this.selectedDisplayOption = listDisplayOptions;
        switch (this.selectedDisplayOption) {
            case ListDisplayOptions.All:
                this.selectedDisplayOptionText = 'All';
                break;
            case ListDisplayOptions.Domestic:
                this.selectedDisplayOptionText = 'Domestic';
                break;
            case ListDisplayOptions.International:
                this.selectedDisplayOptionText = 'International';
        }
    }
}
