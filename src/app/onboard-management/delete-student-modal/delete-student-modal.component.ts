import { Component, Input } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { StudentService } from 'src/app/shared/services/student.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './delete-student-modal.component.html',
    styleUrls: ['./delete-student-modal.component.scss']
})
export class DeleteStudentComponent {
    @Input() public student: Student;

    constructor( private _activeModal: NgbActiveModal, private _studentService: StudentService) {}

    public delete() {
        this._studentService.deleteStudent(this.student.id);
        this._activeModal.close();
    }

    public cancel() {
        this._activeModal.close();
    }
}
