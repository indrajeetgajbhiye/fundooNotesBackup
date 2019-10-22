import { TestBed, inject } from '@angular/core/testing';
import { GuardGuard } from './guard.guard';
import { RouterTestingModule } from '@angular/router/testing';
describe('GuardGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [GuardGuard]
        });
    });
    it('should ...', inject([GuardGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=guard.guard.spec.js.map