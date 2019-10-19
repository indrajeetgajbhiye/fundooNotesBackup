import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { AddNotesComponent } from '../add-notes/add-notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardComponent } from '../card/card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NotesComponent,
        AddNotesComponent,
        DisplayNotesComponent,
        NoteIconsComponent,
        DeleteIconsComponent,
        ReminderIconComponent,
        SearchPipe,
        CardComponent
       ],
      imports:[
        NgxMasonryModule,
        AppMaterialModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
