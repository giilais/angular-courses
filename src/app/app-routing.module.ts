import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent
  }, 
  {
    path: 'profile', component: ProfileComponent
  }, 
  {
    path: 'courses', component: CoursesComponent
  }, 
  {
    path: 'courses-details', component: CourseDetailsComponent
  }, 
  {
    path: 'login', component: LoginComponent
  }, 
  {
    path: 'register', component: RegisterComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
