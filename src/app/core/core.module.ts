import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.compnent';
import { LoginComponent } from './login/login.component';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule, FontAwesomeModule, FormsModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        LayoutComponent,
        LoginComponent,
        CoreRoutingModule
    ],
    declarations: [
        HeaderComponent,
        LayoutComponent,
        LoginComponent
    ]
})
export class CoreModule {
}
