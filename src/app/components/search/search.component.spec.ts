import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SearchComponent,
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
      providers:[],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
