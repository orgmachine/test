import { TestBed } from '@angular/core/testing';
import { ApisService } from './apis.service';
describe('ApisService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ApisService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=apis.service.spec.js.map