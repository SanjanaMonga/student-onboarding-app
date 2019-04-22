import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/shared/models/student';
import { faTrash, faPen, faEye } from '@fortawesome/free-solid-svg-icons';
import { StudentType } from 'src/app/shared/enums/student-type.enum';
import { Router } from '@angular/router';
import { FormMode } from 'src/app/shared/enums/form-mode.eum';
import { DeleteStudentComponent } from '../delete-student-modal/delete-student-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { DataService } from 'src/app/shared/services/data.service';

@Component({
    selector: 'app-student-tile',
    templateUrl: './student-tile.component.html',
    styleUrls: ['./student-tile.component.scss']
})
export class StudentTileComponent {
    @Input() student: Student;
    @Output() listChanged: EventEmitter<void> = new EventEmitter();
    public view = faEye;
    public edit = faPen;
    public delete = faTrash;
    public StudentType = StudentType;

    constructor(private _router: Router, private _modalService: NgbModal) { }

    public viewStudentOnboaringInfo() {
        this._router.navigate(['/form', { id: this.student.id, mode: FormMode.ReadOnly }]);
    }

    public editStudentOnboaringInfo() {
        this._router.navigate(['/form', { id: this.student.id, mode: FormMode.Edit }]);
    }

    public deleteStudentOnboaringInfo() {
        const modalRef = this._modalService.open(DeleteStudentComponent);
        modalRef.componentInstance.student = this.student;
        modalRef.result.then(res => this.listChanged.emit());
    }
}
