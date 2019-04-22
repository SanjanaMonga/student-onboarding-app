import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { NgbTabset, NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-onboard-management',
    templateUrl: './onboard-management.component.html',
    styleUrls: ['./onboard-management.component.scss'],
})
export class OnboardManagementComponent implements AfterViewInit {

    @ViewChild(NgbTabset) public tabSet: NgbTabset;
    constructor(private _route: ActivatedRoute, private _router: Router) { }
    ngAfterViewInit() {
        switch (this._route.snapshot.url[0].path) {
            case 'list': this.tabSet.select('tab-2');
                break;
            case 'form': this.tabSet.select('tab-1');
                break;
        }
    }

    public setRoute($event: NgbTabChangeEvent) {
        if ($event.nextId === 'tab-2') {
            this._router.navigate(['/list']);
        }
        if ($event.nextId === 'tab-1') {
            this._router.navigate(['/form']);
        }
    }
}
