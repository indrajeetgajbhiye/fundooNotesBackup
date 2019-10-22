import { async, TestBed } from '@angular/core/testing';
import { AddNotesComponent } from './add-notes.component';
import { MatCardModule, MatDividerModule, MatChipsModule, MatTooltipModule, MatMenuModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AddNotesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                AddNotesComponent,
                NoteIconsComponent,
                ReminderIconComponent
            ],
            imports: [
                MatMenuModule,
                RouterTestingModule,
                MatIconModule,
                MatCardModule,
                FormsModule,
                ReactiveFormsModule,
                MatDividerModule,
                MatChipsModule,
                MatTooltipModule,
                MatCheckboxModule,
                MatDatepickerModule,
                MatFormFieldModule,
                MatSelectModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AddNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-notes.component.spec.js.map