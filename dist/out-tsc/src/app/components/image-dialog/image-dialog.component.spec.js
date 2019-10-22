import { async, TestBed } from '@angular/core/testing';
import { ImageDialogComponent } from './image-dialog.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ImageDialogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ImageDialogComponent],
            imports: [
                AppMaterialModule,
                ImageCropperModule,
                MatDialogModule,
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
        fixture = TestBed.createComponent(ImageDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=image-dialog.component.spec.js.map