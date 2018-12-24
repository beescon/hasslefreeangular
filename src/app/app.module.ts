/// <reference path="prime.module.ts" />
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';
import { PrimeModule } from 'app/prime.module'

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseNavigationModule } from '@fuse/components';
import {
    FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule,
    FuseSearchBarModule, FuseShortcutsModule
} from '@fuse/components';
import {
    MatButtonModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule, MatTooltipModule
,MatOptionModule,MatSelectModule,MatStepperModule,MatAutocompleteModule,MatCheckboxModule,MatRadioModule,MatChipsModule, MatDividerModule, MatListModule, MatMenuModule
} from '@angular/material';
import { fuseConfig } from 'app/fuse-config';
import { FuseConfigService } from '@fuse/services/config.service';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import {
    ContentComponent, FooterComponent, NavbarComponent,
    QuickPanelComponent, ToolbarComponent, LayoutComponent
} from './layout/layout';
import {
    LoginComponent, ForgotPasswordComponent, MailConfirmComponent,
    RegisterComponent, ResetPasswordComponent
} from './authentication/authentication';
// import { LayoutModule } from 'app/layout/layout.module';
import { AuthGuard,
    AuthInterceptor,API_BASE_URL } from './shared/shared';
import { AppointmentComponent } from './main/apps/hasslefree/appointment/appointment.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { EditleadComponent } from './main/apps/hasslefree/editlead/editlead.component';
const appRoutes: Routes = [
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'auth/forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'auth/mail-confirm',
        component: MailConfirmComponent
    },
    {
        path: 'auth/register',
        component: RegisterComponent
    },
    {
        path: 'auth/reset-password',
        component: ResetPasswordComponent
    },
    {
        path: 'apps/hasslefree/appointment',
        component: AppointmentComponent
    },
    {
        path: 'apps/hasslefree/edit-appointment',
        component: EditleadComponent
    },
    {
        path: 'apps',
        component: LayoutComponent,
        loadChildren: './main/apps/apps.module#AppsModule',
        // canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'auth/login'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ContentComponent,
        FooterComponent,
        NavbarComponent,
        QuickPanelComponent,
        ToolbarComponent,
        LayoutComponent,
        LoginComponent,
        ForgotPasswordComponent,
        MailConfirmComponent,
        RegisterComponent,
        ResetPasswordComponent,
        AppointmentComponent,
        EditleadComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PrimeModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatIconModule,
        MatToolbarModule,
        MatDividerModule,
        MatListModule,
        MatSlideToggleModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatFormFieldModule,
        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        FuseProgressBarModule,
        FuseNavigationModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,
        FuseSearchBarModule,
        FuseShortcutsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatTooltipModule,
        MatOptionModule,
        MatSelectModule,
        MatStepperModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatChipsModule, 
        OwlDateTimeModule, 
        OwlNativeDateTimeModule,

        // App modules

        AppStoreModule
    ],
    providers: [AuthGuard, FuseConfigService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        {provide: API_BASE_URL, useValue:"http://localhost:55093"}],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
