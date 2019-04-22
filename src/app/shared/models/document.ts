import { StudentType } from '../enums/student-type.enum';

export interface Document {
    name: string;
    mandatory: boolean;
    isProvided: boolean;
}
