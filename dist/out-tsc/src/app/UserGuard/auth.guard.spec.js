import { TestBed, inject } from '@angular/core/testing';
import { UserGuard } from './auth.guard';
describe('AuthGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UserGuard]
        });
    });
    it('should ...', inject([UserGuard], (guard) => {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=auth.guard.spec.js.map