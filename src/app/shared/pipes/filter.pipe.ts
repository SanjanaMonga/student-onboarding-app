import { Pipe, PipeTransform, Input } from '@angular/core';
import { Student } from '../models/student';
import { StudentType } from '../enums/student-type.enum';
import { ListDisplayOptions } from '../enums/list-display-options.enum';

@Pipe({
    name: 'filterStudents'
})
export class FilterPipe implements PipeTransform {
    public transform(students: Student[], filterCriteria?: ListDisplayOptions, searchCriteria?: string) {
        if (filterCriteria) {
            if (filterCriteria === ListDisplayOptions.Domestic) {
                students = students.filter(stud => stud.category === StudentType.Domestic);
            } else if (filterCriteria === ListDisplayOptions.International) {
                students = students.filter(stud => stud.category === StudentType.International);
            }
        }
        if (searchCriteria) {
            students = students.filter(stud => stud.name.toLowerCase().startsWith(searchCriteria.toLowerCase()));
        }

        return students;
    }
}