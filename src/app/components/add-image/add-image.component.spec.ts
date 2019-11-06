import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImageComponent } from './add-image.component';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('AddImageComponent', () => {
  let component: AddImageComponent;
  let fixture: ComponentFixture<AddImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImageComponent ],
      imports :[
        MatDialogModule,
        HttpClientTestingModule,
        AppMaterialModule
      ],
      providers:[
        {provide: MatDialogRef, useValue: {}},
        {
          provide: MAT_DIALOG_DATA,
          useValue: {} // Add any data you wish to test if it is passed/used correctly
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
