import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotesComponent } from './add-notes.component';
// import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';

describe('AddNotesComponent', () => {
  let component: AddNotesComponent;
  let fixture: ComponentFixture<AddNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddNotesComponent],
      imports: [ RouterTestingModule, MatIconModule ]
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
