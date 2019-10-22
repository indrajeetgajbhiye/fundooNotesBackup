import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('HttpService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: []
    }); });
    it('should be created', function () {
        var service = TestBed.get(HttpService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=http.service.spec.js.map