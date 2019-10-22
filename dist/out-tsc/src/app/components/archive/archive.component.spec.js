import { async, TestBed } from '@angular/core/testing';
import { ArchiveComponent } from './archive.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { CardComponent } from '../card/card.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatChipsModule, MatTooltipModule, MatDividerModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatDatepickerModule } from '@angular/material';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('ArchiveComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ArchiveComponent,
                DisplayNotesComponent,
                SearchPipe,
                CardComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                ReminderIconComponent,
            ],
            imports: [
                NgxMasonryModule,
                FormsModule,
                MatIconModule,
                MatChipsModule,
                MatTooltipModule,
                MatDividerModule,
                MatCardModule,
                MatMenuModule,
                MatCheckboxModule,
                MatDatepickerModule,
                AppMaterialModule,
                HttpClientTestingModule
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ArchiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=archive.component.spec.js.map