import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotesComponent } from './add-notes.component';
import { MatCardModule, MatDividerModule, MatChipsModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NgxLoadingModule } from 'ngx-loading';
describe('AddNotesComponent', () => {
  let component: AddNotesComponent;
  let fixture: ComponentFixture<AddNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AddNotesComponent, 
        NoteIconsComponent, 
        ReminderIconComponent
      ],
      imports: [ 
        MatMenuModule,
        RouterTestingModule, 
        MatIconModule, 
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatDividerModule,
        MatChipsModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        HttpClientTestingModule,
        AppMaterialModule,
        NgxLoadingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
