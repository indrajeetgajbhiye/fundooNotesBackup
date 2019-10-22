import { async, TestBed } from '@angular/core/testing';
import { DisplayNotesComponent } from './display-notes.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('DisplayNotesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                DisplayNotesComponent,
                SearchPipe,
                CardComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                ReminderIconComponent,
            ],
            imports: [
                AppMaterialModule,
                NgxMasonryModule,
                HttpClientTestingModule,
            ],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DisplayNotesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=display-notes.component.spec.js.map