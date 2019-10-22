import { TestBed } from '@angular/core/testing';
import { NoteService } from './note.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('NoteService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    }); });
    it('should be created', function () {
        var service = TestBed.get(NoteService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=note.service.spec.js.map