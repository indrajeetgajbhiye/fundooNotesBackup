import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component'
import { NotesComponent } from './components/notes/notes.component'
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component'
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { GuardGuard } from '../guard/guard.guard';
import { LabelDialogComponent } from './components/label-dialog/label-dialog.component';
import { RemindersComponent } from './components/reminders/reminders.component'
import { LabelsComponent } from './components/labels/labels.component'
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SearchComponent } from './components/search/search.component';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { CollaboratorDialogComponent } from './components/collaborator-dialog/collaborator-dialog.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'registration',component: RegisterComponent},
  {path: 'forgot',component: ForgotPasswordComponent},
  {path: 'resetpassword/:token', component: ResetPasswordComponent},
  {path: '',component: HomeComponent,canActivate:[GuardGuard],children:[
      {path:'home',component:NotesComponent},
      {path:'archive',component:ArchiveComponent},
      {path:'trash',component:TrashComponent},
      {path:'reminder',component:RemindersComponent},
      {path:'label/:labelName',component:LabelsComponent},
      {path:'questionAnswer/:cardId',component:QuestionAnswerComponent},
      {path: 'search', component: SearchComponent}
    ] 
  },
  {path:'update-note',component:NoteDialogComponent},
  {path:'update-label',component:LabelDialogComponent},
  {path:'upload-image',component:ImageDialogComponent},
  {path:'collabs', component: CollaboratorDialogComponent},
  {path:'**', redirectTo: 'home'}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
