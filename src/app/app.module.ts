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
import { CategorieComponent } from './modules/category/categorie/categorie.component';
import { DeadComponent } from './modules/dead/dead/dead.component';
import { AddDepartementComponent } from './modules/departement/add-departement/add-departement.component';
import { DepartementComponent } from './modules/departement/departement/departement.component';
import { AddDoctorComponent } from './modules/doctor/add-doctor/add-doctor.component';
import { MedecinComponent } from './modules/doctor/medecin/medecin.component';
import { AddDocumentComponent } from './modules/document/add-document/add-document.component';
import { DocumentComponent } from './modules/document/document/document.component';
import { AccountantComponent } from './modules/employee/accountant/accountant.component';
import { AddEmployeeComponent } from './modules/employee/add-employee/add-employee.component';
import { LaboratoryComponent } from './modules/employee/laboratory/laboratory.component';
import { NurseComponent } from './modules/employee/nurse/nurse.component';
import { OperatorComponent } from './modules/employee/operator/operator.component';
import { PharmasistComponent } from './modules/employee/pharmasist/pharmasist.component';
import { RecepionistComponent } from './modules/employee/recepionist/recepionist.component';
import { ConfigurationComponent } from './modules/general/configuration/configuration.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { LoginComponent } from './modules/general/login/login.component';
import { IvestigationComponent } from './modules/investigation/ivestigation/ivestigation.component';
import { AddInvoiceComponent } from './modules/invoice/add-invoice/add-invoice.component';
import { InvoiceComponent } from './modules/invoice/invoice/invoice.component';
import { MedicamentComponent } from './modules/medicament/medicament/medicament.component';
import { AddPatientComponent } from './modules/patient/add-patient/add-patient.component';
import { PatientComponent } from './modules/patient/patient/patient.component';
import { AddPaymentComponent } from './modules/payment/add-payment/add-payment.component';
import { PaymentComponent } from './modules/payment/payment/payment.component';
import { AddPrescriptionComponent } from './modules/prescription/add-prescription/add-prescription.component';
import { PrescriptionComponent } from './modules/prescription/prescription/prescription.component';
import { AddScheduleComponent } from './modules/schedule/add-schedule/add-schedule.component';
import { ProgramComponent } from './modules/schedule/program/program.component';
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
import { EditEmployeeComponent } from './modules/employee/edit-employee/edit-employee.component';
import { EditAccountComponent } from './modules/account/edit-account/edit-account.component';
import { EditCategoryComponent } from './modules/category/edit-category/edit-category.component';
import { EditDocumentComponent } from './modules/document/edit-document/edit-document.component';
import { EditMedicamentComponent } from './modules/medicament/edit-medicament/edit-medicament.component';
import { EditInvoiceComponent } from './modules/invoice/edit-invoice/edit-invoice.component';
import { EditPatientComponent } from './modules/patient/edit-patient/edit-patient.component';
import { EditPrescriptionComponent } from './modules/prescription/edit-prescription/edit-prescription.component';
import { EditRendezvousComponent } from './modules/schedule/edit-rendezvous/edit-rendezvous.component';
import { ShortcutMenuComponent } from './template/shortcut-menu/shortcut-menu.component';
const routes: Routes = [
  { path: 'invoice', component: InvoiceComponent },
  { path: 'addinvoice', component: AddInvoiceComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'addservice', component: AddServiceComponent },
  { path: 'accountant', component: AccountantComponent },
  { path: 'birth', component: BirthdayComponent },
  { path: 'category', component: CategorieComponent },
  { path: 'dead', component: DeadComponent },
  { path: 'medicament', component: MedicamentComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'adddepartement', component: AddDepartementComponent },
  { path: 'document', component: DocumentComponent },
  { path: 'adddocument', component: AddDocumentComponent },
   { path: 'laboratory', component: LaboratoryComponent },
  { path: 'adddoctor', component: AddDoctorComponent },
  { path: 'doctor', component: MedecinComponent },
  { path: 'medicament', component: MedicamentComponent },
  { path: 'addmedicament', component: MedecinComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'operator', component: OperatorComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'addpatient', component: AddPatientComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'pharmacist', component: PharmasistComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'addprescription', component: AddPrescriptionComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'receptionist', component: RecepionistComponent },
  { path: 'rendezvous', component: RendezVousComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'addrendezvous', component: AddAppointmentComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InvoiceComponent,
    MedicamentComponent,
    ServiceComponent,
    DashboardComponent,
    HeaderComponent,
    DepartementComponent,
    MedecinComponent,
    PatientComponent,
    DocumentComponent,
    ProgramComponent,
    RendezVousComponent,
    PrescriptionComponent,
    AccountComponent,
    PaymentComponent,
    AccountantComponent,
    LaboratoryComponent,
    NurseComponent,
    PharmasistComponent,
    RecepionistComponent,
    BirthdayComponent,
    DeadComponent,
    CategorieComponent,
    IvestigationComponent,
    OperatorComponent,
    LoginComponent,
    ConfigurationComponent,
    AddDepartementComponent,
    AddDoctorComponent,
    AddPatientComponent,
    AddDocumentComponent,
    AddScheduleComponent,
    AddAppointmentComponent,
    AddPrescriptionComponent,
    AddAccountComponent,
    AddInvoiceComponent,
    AddPaymentComponent,
    AddServiceComponent,
    AddEmployeeComponent,
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
    EditEmployeeComponent,
    EditAccountComponent,
    EditCategoryComponent,
    EditDocumentComponent,
    EditMedicamentComponent,
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
