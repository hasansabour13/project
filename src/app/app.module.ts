import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { PagenotfondComponent } from './pagenotfond/pagenotfond.component';
import { RouterModule } from '@angular/router';//روتینگ
import { FormsModule } from '@angular/forms';//two date binding
import { AppRoutingModule } from './app.routes';//برای روتینگ اضافه میشود
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,HomeComponent,ProjectComponent,PagenotfondComponent,ProfileComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
