import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { FormMode } from 'src/app/shared/enums/form-mode.eum';
import { Form, NgForm, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from 'src/app/shared/services/student.service';
import { StudentType } from 'src/app/shared/enums/student-type.enum';
import { DocumentService } from 'src/app/shared/services/document.service';
import { Document } from 'src/app/shared/models/document';

@Component({
    selector: 'app-student-onboarding-form',
    templateUrl: './student-onboarding-form.component.html',
    styleUrls: ['./student-onboarding-form.component.scss']
})
export class StudentOnboardingFormComponent implements OnInit {
    public disabled = false;
    public StudentType = StudentType;
    public scoreInvalid = false;
    public docListIncomplete = false;
    public student: Student = {
        id: 0, name: '', dob: new Date('1980-01-01'),
        father: '', mother: '', lastScore: 0, category: StudentType.Domestic, listOfDocs: []
    };
    public formMode: FormMode;

    constructor(private _route: ActivatedRoute, private _studentService: StudentService,
        private _documentService: DocumentService, private _router: Router) {
        this._route.params.subscribe((params: Params) => {
            if (this._route.snapshot.url[0].path !== 'list') {
                if (params.hasOwnProperty('id')) {
                    this._studentService.getAllStudents().subscribe((students) => {
                        this.student = students.find(stud =>
                            +params['id'] === +stud.id);
                    });
                }
                if (params.hasOwnProperty('mode')) {
                    this.formMode = params['mode'];
                } else {
                    this.formMode = FormMode.New;
                }
            }
        });
    }

    ngOnInit() {
        if (+this.formMode === +FormMode.ReadOnly) {
            this.disabled = true;
        }
        if (this.formMode === FormMode.New) {
            this.loadDocument();
        }
    }

    public loadDocument() {
        this.student.listOfDocs = [];
        this._documentService.getAllDocuments().subscribe((documents: { name: string, mandatory: StudentType[] }[]) => {
            documents.map((doc: { name: string, mandatory: StudentType[] }) => {
                const docReq: Document = { name: '', mandatory: false, isProvided: false };
                if (doc.mandatory.includes(+this.student.category)) {
                    docReq.mandatory = true;
                } else {
                    docReq.mandatory = false;
                }
                docReq.name = doc.name;
                this.student.listOfDocs.push(docReq);
            });
        });
    }
    
    public onSubmit(form: NgForm) {
        if (+form.controls['lastScore'].value > 100 || +form.controls['lastScore'].value < 0) {
            this.scoreInvalid = true;
        }

        this.student.listOfDocs.map((doc) => {
            if (doc.mandatory === true && form.controls[doc.name].value === false) {
                this.docListIncomplete = true;
            }
        });
        if (form.valid && !this.scoreInvalid && !this.docListIncomplete) {
            this._studentService.addUpdateStudent(this.student);
            this._router.navigate(['/list']);
        }

    }
}
