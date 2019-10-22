import { async, TestBed } from '@angular/core/testing';
import { NoteIconsComponent } from './note-icons.component';
import { CardComponent } from '../../../../src/app/components/card/card.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
describe('NoteIconsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                NoteIconsComponent,
                CardComponent,
                ReminderIconComponent,
                DeleteIconsComponent
            ],
            imports: [
                AppMaterialModule,
                RouterTestingModule,
                HttpClientTestingModule
            ],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NoteIconsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=note-icons.component.spec.js.map