import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminComponent } from './admin/admin.component';
import { AddCapabilityComponent } from './add-capability/add-capability.component';
import { DeleteCapabilityComponent } from './delete-capability/delete-capability.component';
import { AddJobFamilyComponent } from './add-job-family/add-job-family.component';
import { AuthGuard } from './_helpers/auth.guard';
import { EditCapabilityComponent } from './edit-capability/edit-capability.component';
import { DeleteJobFamilyComponent } from './delete-job-family/delete-job-family.component';
import { EditJobFamilyComponent } from './edit-job-family/edit-job-family.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'main', component: MainComponent, canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
      { path: 'addCapability', component: AddCapabilityComponent },
      { path: 'deleteCapability', component: DeleteCapabilityComponent },
      { path: 'addJobFamily', component: AddJobFamilyComponent },
      { path: 'editCapability', component: EditCapabilityComponent },
      { path: 'deleteJobFamily', component: DeleteJobFamilyComponent },
      { path: 'editJobFamily', component: EditJobFamilyComponent },
      { path: '**', component: PageNotFoundComponent }
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
