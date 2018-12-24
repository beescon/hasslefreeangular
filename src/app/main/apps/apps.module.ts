import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FuseSharedModule } from '@fuse/shared.module';
import {AuthGuard} from '../../shared/shared';

const routes: Routes = [
    {
        path: 'hasslefree/lead',
        loadChildren: './hasslefree/hasslefree.module#HasslefreeModule',
        // canActivate:[AuthGuard]
    },
    {
        path: 'apps/hasslefree/appointment',
        loadChildren: './main/apps/apps.module#AppsModule',
        // canActivate:[AuthGuard]
    },
    {
        path: 'apps/hasslefree/edit-appointment',
        loadChildren: './main/apps/apps.module#AppsModule',
        // canActivate:[AuthGuard]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class AppsModule
{
}
