import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDialogComponent } from './label-dialog.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LabelDialogComponent', () => {
  let component: LabelDialogComponent;
  let fixture: ComponentFixture<LabelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelDialogComponent ],
      imports : [
        AppMaterialModule,
        HttpClientTestingModule
      ],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA,
          useValue: {} // Add any data you wish to test if it is passed/used correctly
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
