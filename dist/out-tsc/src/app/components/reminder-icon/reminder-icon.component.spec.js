import { async, TestBed } from '@angular/core/testing';
import { ReminderIconComponent } from './reminder-icon.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
describe('ReminderIconComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                ReminderIconComponent,
                SearchPipe,
                CardComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                DisplayNotesComponent
            ],
            imports: [
                AppMaterialModule,
                HttpClientTestingModule,
                NgxMasonryModule
            ],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReminderIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reminder-icon.component.spec.js.map