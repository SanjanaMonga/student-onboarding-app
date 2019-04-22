import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject, BehaviorSubject } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {
    constructor(private _httpService: HttpService) {
    }
    getAllDocuments() {
        return this._httpService.get('assets/document-list.json');
    }
}
