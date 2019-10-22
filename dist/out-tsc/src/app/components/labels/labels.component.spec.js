import { async, TestBed } from '@angular/core/testing';
import { LabelsComponent } from './labels.component';
import { DisplayNotesComponent } from '../display-notes/display-notes.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { CardComponent } from '../card/card.component';
import { NoteIconsComponent } from '../note-icons/note-icons.component';
import { DeleteIconsComponent } from '../delete-icons/delete-icons.component';
import { ReminderIconComponent } from '../reminder-icon/reminder-icon.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('LabelsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                LabelsComponent,
                DisplayNotesComponent,
                SearchPipe,
                CardComponent,
                NoteIconsComponent,
                DeleteIconsComponent,
                ReminderIconComponent
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
        fixture = TestBed.createComponent(LabelsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=labels.component.spec.js.map