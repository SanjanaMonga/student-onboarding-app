import { Document } from './document';
import { StudentType } from '../enums/student-type.enum';

export class Student {
    id: number;
    name: string;
    dob: Date;
    listOfDocs?: Document[];
    category: StudentType;
    father: string;
    mother: string;
    lastScore: number;
    constructor(){}
}
