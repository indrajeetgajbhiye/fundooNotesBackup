import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderIconComponent } from './reminder-icon.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';

describe('ReminderIconComponent', () => {
  let component: ReminderIconComponent;
  let fixture: ComponentFixture<ReminderIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReminderIconComponent,
        SearchPipe,
        CardComponent,
        NoteIconsComponent,
        DeleteIconsComponent,
        DisplayNotesComponent
       ],
      imports: [
        AppMaterialModule,
        HttpClientTestingModule,
        NgxMasonryModule
      ],
      providers : []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
