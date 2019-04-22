import { NgModule } from '@angular/core';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentTileComponent } from './student-tile/student-tile.component';
import { CommonModule } from '@angular/common';
import { OnboardRoutingModule } from './onboard-routing.module';
import { OnboardManagementComponent } from './onboard-management.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentOnboardingFormComponent } from './student-onboarding-form/student-onboarding-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { DeleteStudentComponent } from './delete-student-modal/delete-student-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        StudentListComponent,
        StudentTileComponent,
        OnboardManagementComponent,
        StudentOnboardingFormComponent,
        DeleteStudentComponent
    ],
    imports: [CommonModule, FontAwesomeModule, FormsModule, NgbModule, SharedModule],
    exports: [
        StudentListComponent,
        StudentTileComponent,
        OnboardRoutingModule,
        OnboardManagementComponent,
        StudentOnboardingFormComponent,
        DeleteStudentComponent
    ],
    entryComponents: [DeleteStudentComponent]
})
export class OnboardManagementModule {

}
