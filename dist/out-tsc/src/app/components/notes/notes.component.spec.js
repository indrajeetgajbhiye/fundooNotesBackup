import { async, TestBed } from '@angular/core/testing';
import { NotesComponent } from './notes.component';
import { AddNotesComponent } from '../add-notes/add-notes.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardComponent } from '../card/card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('NotesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                NotesComponent,
                AddNotesComponent,
                DisplayNotesComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                ReminderIconComponent,
                SearchPipe,
                CardComponent
            ],
            imports: [
                NgxMasonryModule,
                AppMaterialModule,
                HttpClientTestingModule,
                RouterTestingModule,
            ],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=notes.component.spec.js.map