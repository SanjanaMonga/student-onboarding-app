import { Component, OnInit } from '@angular/core';
import { HelperService } from './shared/services/helper.service';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _httpService: HttpService, private _helperService: HelperService) { }
  ngOnInit() {
    this._httpService.get('../../assets/student-data.json').subscribe(data =>
      this._helperService.setItemToLocalStorage('students', data));
    this._helperService.removeItemFromLocalStorage('user');
  }
}
