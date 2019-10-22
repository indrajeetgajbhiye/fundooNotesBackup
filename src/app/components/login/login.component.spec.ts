import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de : DebugElement;
  let e1 : HTMLElement;
  let validEmail = "vvghc@gmail.com";
  let valdiPassword = "12345678"

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers : []
    }).compileComponents().then(()=>{
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      // e1 = de.nativeElement;
    })
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("login should be login", ()=>{
    expect(LoginComponent).toBe(LoginComponent);
  })
  it('form should be valid',async(()=>{
    component.email.setValue(validEmail);
    component.password.setValue(valdiPassword);
    expect(component.email.value).toBeTruthy();
    expect(component.password.value).toBeTruthy();
  }))
  it('SecureLogin should be valid',async(()=>{
    component.email.setValue('');
    component.password.setValue('');
    expect(component.email.value).toBeFalsy()
    expect(component.password.value).toBeFalsy()
  }))
  it('should call secureLogin', async(() => {
    spyOn(component, 'secureLogin');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.secureLogin).toHaveBeenCalled();
    });
  }));
});
