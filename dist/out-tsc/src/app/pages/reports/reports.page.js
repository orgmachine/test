import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/File/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
let ReportsPage = class ReportsPage {
    constructor(api, util, router, fileOpener, platform, file, ft, document) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.file = file;
        this.ft = ft;
        this.document = document;
        this.haveItems = false;
        this.reports = [];
        this.dummy = Array(50);
    }
    ngOnInit() {
        this.api.getLabReports().then(data => {
            if (data && data.length != 0) {
                this.reports = data;
                this.haveItems = true;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    viewReport(data) {
        console.log(data);
        this.router.navigate(['iframe'], {
            queryParams: {
                value: JSON.stringify(data)
            }
        });
    }
    downloadAndOpenPdf(data) {
        // alert(url)
        let downloadUrl = data.doc;
        let path = this.file.dataDirectory;
        const transfer = this.ft.create();
        transfer.download(downloadUrl, path + 'report.pdf').then(entry => {
            let url = entry.toURL();
            // alert(url)
            if (this.platform.is('ios')) {
                this.document.viewDocument(url, 'application/pdf', {});
            }
            else {
                this.fileOpener.open(url, 'application/pdf')
                    .then(() => console.log('File is opened'))
                    .catch(e => console.log('Error opening file', e));
            }
        });
    }
};
ReportsPage = __decorate([
    Component({
        selector: 'app-reports',
        templateUrl: './reports.page.html',
        styleUrls: ['./reports.page.scss'],
    }),
    __param(7, Inject(DocumentViewer)),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        FileOpener,
        Platform,
        File,
        FileTransfer,
        DocumentViewer])
], ReportsPage);
export { ReportsPage };
//# sourceMappingURL=reports.page.js.map