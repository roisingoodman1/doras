import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComparePageComponent } from './compare-page/compare-page.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './_helpers/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component'


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

const routes: Routes = [
  {path: 'compare', component: ComparePageComponent}
    path: 'search', component: SearchComponent
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },
  {
    path: 'admin', component: AdminComponent, children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' }
    ]
  },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
