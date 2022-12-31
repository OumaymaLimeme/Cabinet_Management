import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { AccountComponent } from './modules/account/account/account.component';
import { AddAccountComponent } from './modules/account/add-account/add-account.component';
import { AddAppointmentComponent } from './modules/appointment/add-appointment/add-appointment.component';
import { RendezVousComponent } from './modules/appointment/rendez-vous/rendez-vous.component';
import { BirthdayComponent } from './modules/birth/birthday/birthday.component';
import { DeadComponent } from './modules/dead/dead/dead.component';
import { AddDepartementComponent } from './modules/departement/add-departement/add-departement.component';
import { DepartementComponent } from './modules/departement/departement/departement.component';
import { AddDoctorComponent } from './modules/doctor/add-doctor/add-doctor.component';
import { MedecinComponent } from './modules/doctor/medecin/medecin.component';
import { AddDocumentComponent } from './modules/document/add-document/add-document.component';
import { DocumentComponent } from './modules/document/document/document.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { LoginComponent } from './modules/general/login/login.component';
import { AddInvoiceComponent } from './modules/invoice/add-invoice/add-invoice.component';
import { AddPatientComponent } from './modules/patient/add-patient/add-patient.component';
import { PatientComponent } from './modules/patient/patient/patient.component';
import { AddPrescriptionComponent } from './modules/prescription/add-prescription/add-prescription.component';
import { PrescriptionComponent } from './modules/prescription/prescription/prescription.component';
import { AddScheduleComponent } from './modules/schedule/add-schedule/add-schedule.component';
import { AddServiceComponent } from './modules/service/add-service/add-service.component';
import { ServiceComponent } from './modules/service/service/service.component';
import { HeaderComponent } from './template/header/header.component';
import { NavigationComponent } from './template/navigation/navigation.component';

import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDepartementComponent } from './modules/departement/edit-departement/edit-departement.component';
import { EditMedecinComponent } from './modules/doctor/edit-medecin/edit-medecin.component';
import { EditAccountComponent } from './modules/account/edit-account/edit-account.component';
import { EditDocumentComponent } from './modules/document/edit-document/edit-document.component';
import { EditInvoiceComponent } from './modules/invoice/edit-invoice/edit-invoice.component';
import { EditPatientComponent } from './modules/patient/edit-patient/edit-patient.component';
import { EditPrescriptionComponent } from './modules/prescription/edit-prescription/edit-prescription.component';
import { EditRendezvousComponent } from './modules/schedule/edit-rendezvous/edit-rendezvous.component';
import { ShortcutMenuComponent } from './template/shortcut-menu/shortcut-menu.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'addservice', component: AddServiceComponent },
  { path: 'birth', component: BirthdayComponent },
  { path: 'dead', component: DeadComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'adddepartement', component: AddDepartementComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'adddocument', component: AddDocumentComponent },
  { path: 'adddoctor', component: AddDoctorComponent },
  { path: 'doctor', component: MedecinComponent },
  { path: 'addmedicament', component: MedecinComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'addpatient', component: AddPatientComponent },
   { path: 'prescription', component: PrescriptionComponent },
  { path: 'addprescription', component: AddPrescriptionComponent },
  { path: 'rendezvous', component: RendezVousComponent },
  { path: 'addrendezvous', component: AddAppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServiceComponent,
    DashboardComponent,
    HeaderComponent,
    DepartementComponent,
    MedecinComponent,
    PatientComponent,
    DocumentComponent,
    RendezVousComponent,
    PrescriptionComponent,
    AccountComponent,
    BirthdayComponent,
    DeadComponent,
    LoginComponent,
    AddDepartementComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AddDocumentComponent,
    AddScheduleComponent,
    AddAppointmentComponent,
    AddPrescriptionComponent,
    AddAccountComponent,
    AddInvoiceComponent,
    AddServiceComponent,
    AddAccountComponent,
    AddServiceComponent,
    AddScheduleComponent,
    AddPrescriptionComponent,
    AddPatientComponent,
    AddDocumentComponent,
    AddInvoiceComponent,
    ViewDoctorComponent,
    ViewPatientComponent,
    ViewPrescriptionComponent,
    EditDepartementComponent,
    EditMedecinComponent,
    EditAccountComponent,
    EditDocumentComponent,
    EditInvoiceComponent,
    EditPatientComponent,
    EditRendezvousComponent,
    ShortcutMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
