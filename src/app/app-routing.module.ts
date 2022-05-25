import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./@pages/home/home.module').then(m => m.HomeModule) },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'about', loadChildren: () => import('./@pages/about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./@pages/contact/contact.module').then(m => m.ContactModule) },
  { path: 'services', loadChildren: () => import('./@pages/services/services.module').then(m => m.ServicesModule) },
  { path: 'departments', loadChildren: () => import('./@pages/departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'doctors', loadChildren: () => import('./@pages/doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: 'appointment', loadChildren: () => import('./@pages/appointment/appointment.module').then(m => m.AppointmentModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
