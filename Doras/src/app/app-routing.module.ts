import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ComparePageComponent } from './compare-page/compare-page.component';


const routes: Routes = [
  {path: 'compare', component: ComparePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
