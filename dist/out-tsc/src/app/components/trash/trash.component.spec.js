import { async, TestBed } from '@angular/core/testing';
import { TrashComponent } from './trash.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { NgxMasonryModule } from 'ngx-masonry';
import { AppMaterialModule } from 'src/app/app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('TrashComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                TrashComponent,
                DisplayNotesComponent,
                CardComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                ReminderIconComponent,
                SearchPipe
            ],
            imports: [
                AppMaterialModule,
                NgxMasonryModule,
                HttpClientTestingModule,
                RouterTestingModule
            ],
            providers: []
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TrashComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=trash.component.spec.js.map