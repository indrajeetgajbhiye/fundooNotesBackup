import { async, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { SearchPipe } from 'src/app/pipe/search.pipe';
describe('CardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                CardComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                ReminderIconComponent,
                DisplayNotesComponent,
                SearchPipe
            ],
            imports: [
                NgxMasonryModule,
                AppMaterialModule,
                HttpClientTestingModule,
                RouterTestingModule
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=card.component.spec.js.map