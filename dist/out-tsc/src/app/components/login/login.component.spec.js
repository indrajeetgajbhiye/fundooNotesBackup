import { async, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
describe('LoginComponent', function () {
    var component;
    var fixture;
    var de;
    var e1;
    var validEmail = "vvghc@gmail.com";
    var valdiPassword = "12345678";
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [
                AppMaterialModule,
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                BrowserAnimationsModule
            ],
            providers: []
        }).compileComponents().then(function () {
            fixture = TestBed.createComponent(LoginComponent);
            component = fixture.componentInstance;
            de = fixture.debugElement.query(By.css('form'));
            // e1 = de.nativeElement;
        });
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it("login should be login", function () {
        expect(LoginComponent).toBe(LoginComponent);
    });
    it('form should be valid', async(function () {
        component.email.setValue(validEmail);
        component.password.setValue(valdiPassword);
        expect(component.email.value).toBeTruthy();
        expect(component.password.value).toBeTruthy();
    }));
    it('SecureLogin should be valid', async(function () {
        component.email.setValue('');
        component.password.setValue('');
        expect(component.email.value).toBeFalsy();
        expect(component.password.value).toBeFalsy();
    }));
    it('should call secureLogin', async(function () {
        spyOn(component, 'secureLogin');
        var button = fixture.debugElement.nativeElement.querySelector('button');
        button.click();
        fixture.whenStable().then(function () {
            expect(component.secureLogin).toHaveBeenCalled();
        });
    }));
});
//# sourceMappingURL=login.component.spec.js.map