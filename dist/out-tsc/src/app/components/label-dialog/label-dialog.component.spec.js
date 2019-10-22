import { async, TestBed } from '@angular/core/testing';
import { LabelDialogComponent } from './label-dialog.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('LabelDialogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [LabelDialogComponent],
            imports: [
                AppMaterialModule,
                HttpClientTestingModule
            ],
            providers: [
                { provide: MatDialogRef, useValue: {} },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {} // Add any data you wish to test if it is passed/used correctly
                }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LabelDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=label-dialog.component.spec.js.map