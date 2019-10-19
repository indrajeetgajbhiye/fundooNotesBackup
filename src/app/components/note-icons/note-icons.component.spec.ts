import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteIconsComponent } from './note-icons.component';
import { CardComponent} from '../../../../src/app/components/card/card.component'
import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
describe('NoteIconsComponent', () => {
  let component: NoteIconsComponent;
  let fixture: ComponentFixture<NoteIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NoteIconsComponent, 
        CardComponent , 
        ReminderIconComponent,
        DeleteIconsComponent
    ],
      imports:[
        AppMaterialModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
