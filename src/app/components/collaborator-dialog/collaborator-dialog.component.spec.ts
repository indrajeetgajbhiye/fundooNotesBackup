import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorDialogComponent } from './collaborator-dialog.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('CollaboratorDialogComponent', () => {
  let component: CollaboratorDialogComponent;
  let fixture: ComponentFixture<CollaboratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorDialogComponent ],
      imports: [
        AppMaterialModule,
        HttpClientTestingModule,
        MatDialogModule,
      ],
      providers: [
        // workaround: why I can't inject MatDialogRef in the unit test?
        {provide: MatDialogRef, useValue: {}},
         {
          provide: MAT_DIALOG_DATA,
          useValue: {} // Add any data you wish to test if it is passed/used correctly
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
