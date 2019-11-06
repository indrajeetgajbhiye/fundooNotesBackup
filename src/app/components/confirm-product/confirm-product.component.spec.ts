import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmProductComponent } from './confirm-product.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ConfirmProductComponent', () => {
  let component: ConfirmProductComponent;
  let fixture: ComponentFixture<ConfirmProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmProductComponent ],
      imports:[
        AppMaterialModule,
        MatDialogModule,
        RouterTestingModule,
        BrowserAnimationsModule
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
    fixture = TestBed.createComponent(ConfirmProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
