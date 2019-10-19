import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersComponent } from './reminders.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';

describe('RemindersComponent', () => {
  let component: RemindersComponent;
  let fixture: ComponentFixture<RemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RemindersComponent,
        DisplayNotesComponent,
        SearchPipe,
        CardComponent,
        NoteIconsComponent,
        DeleteIconsComponent,
        ReminderIconComponent,
       ],
      imports: [
        AppMaterialModule,
        NgxMasonryModule,
        HttpClientTestingModule,
      ],
      providers: [
        
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
