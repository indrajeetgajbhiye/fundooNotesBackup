import { async, TestBed } from '@angular/core/testing';
import { ResetPasswordComponent } from './reset-password.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ResetPasswordComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ResetPasswordComponent,
            ],
            imports: [
                AppMaterialModule,
                HttpClientTestingModule,
                RouterTestingModule,
                BrowserAnimationsModule
            ],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ResetPasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reset-password.component.spec.js.map