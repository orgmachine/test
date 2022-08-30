import { __decorate, __metadata, __param } from "tslib";
import { Injectable, Inject } from '@angular/core';
import { ReplaySubject, forkJoin } from 'rxjs';
import { DOCUMENT } from '@angular/common';
/**
 * Handled loading the external library ondemand into our app
 */
let ExternalLibraryService = class ExternalLibraryService {
    constructor(document) {
        this.document = document;
        this._loadedLibraries = {};
    }
    // forkjoin parameters will grow when we are adding any new external library into app
    lazyLoadLibrary(resourceURL) {
        return forkJoin([
            this.loadScript(resourceURL)
        ]);
    }
    loadScript(url) {
        if (this._loadedLibraries[url]) {
            return this._loadedLibraries[url].asObservable();
        }
        this._loadedLibraries[url] = new ReplaySubject();
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
        script.onload = () => {
            this._loadedLibraries[url].next();
            this._loadedLibraries[url].complete();
        };
        this.document.body.appendChild(script);
        return this._loadedLibraries[url].asObservable();
    }
};
ExternalLibraryService = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], ExternalLibraryService);
export { ExternalLibraryService };
//# sourceMappingURL=razorpay.js.map