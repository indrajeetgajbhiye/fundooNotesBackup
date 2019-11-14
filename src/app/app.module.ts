import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { NoteIconsComponent } from './components/note-icons/note-icons.component';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesComponent } from './components/notes/notes.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { SearchPipe } from './pipe/search.pipe';
import { DeleteIconsComponent } from './components/delete-icons/delete-icons.component';
import { ReminderIconComponent } from './components/reminder-icon/reminder-icon.component';
import { LabelDialogComponent } from './components/label-dialog/label-dialog.component';
import { LabelsComponent } from './components/labels/labels.component';
import { CardComponent } from './components/card/card.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BarRatingModule } from "ngx-bar-rating";
import { SearchComponent } from './components/search/search.component';
import { ImageDialogComponent } from './components/image-dialog/image-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgxMasonryModule } from 'ngx-masonry';
import { CollaboratorDialogComponent } from './components/collaborator-dialog/collaborator-dialog.component';
import { QuestionAnswerComponent } from './components/question-answer/question-answer.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmProductComponent } from './components/confirm-product/confirm-product.component';
import { ProductComponent } from './components/product/product.component';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { AddImageComponent } from './components/add-image/add-image.component';
import { LikeComponent } from './components/like/like.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NoteIconsComponent,
    AddNotesComponent,
    ResetPasswordComponent,
    DisplayNotesComponent,
    NotesComponent,
    RemindersComponent,
    NoteDialogComponent,
    ArchiveComponent,
    TrashComponent,
    SearchPipe,
    DeleteIconsComponent,
    ReminderIconComponent,
    LabelDialogComponent,
    LabelsComponent,
    CardComponent,
    SearchComponent,
    ImageDialogComponent,
    CollaboratorDialogComponent,
    QuestionAnswerComponent,
    CartComponent,
    ConfirmProductComponent,
    ProductComponent,
    AddImageComponent,
    LikeComponent,
    StarRatingComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ImageCropperModule,
    MatDialogModule,
    NgxMasonryModule,
    ClickOutsideModule,
    BarRatingModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0)', 
      backdropBorderRadius: '12px',
      primaryColour: ' #f28b82', 
      secondaryColour: ' #fbbc04', 
      tertiaryColour: '#d7aefb'
  }),
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }