import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { PagenotfondComponent } from './pagenotfond/pagenotfond.component';
import { ProfileComponent } from './profile/profile.component';



export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'project',component:ProjectComponent},
  {path:'profile',component:ProfileComponent},
  { path:'**',component:PagenotfondComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
