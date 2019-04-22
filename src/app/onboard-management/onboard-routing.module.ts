import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { OnboardManagementComponent } from './onboard-management.component';
import { IsLoggedInGuard } from '../shared/gaurds/is-logged-in.guard';

const routes: Routes = [
    { path: 'list', component: OnboardManagementComponent, canActivate: [IsLoggedInGuard] },
    { path: 'form', component: OnboardManagementComponent, canActivate: [IsLoggedInGuard] }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OnboardRoutingModule { }
