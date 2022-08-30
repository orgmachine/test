import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ModalController, MenuController } from '@ionic/angular';
import { FaqPage } from '../faq/faq.page';
let FaqsPage = class FaqsPage {
    constructor(modalController, menuCtrl) {
        this.modalController = modalController;
        this.menuCtrl = menuCtrl;
        this.faqs = {
            'How can I consult?': [
                { 'How do I use the MendMyKarma App?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How MendMyKarma help me?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How much does shipping cost?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Where does my order ship from?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I change my shipping address?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Astrologer Section': [
                { 'In which countries is the service available?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Are Astrologer Verified?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Payment, Pricing & Promotions Issue': [
                { 'How do I pay?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Unable to pay?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Pyment not updated?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Refunds': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Call Connection Issue': [
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Managing Your Account': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'User Feedback': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ],
            'Customer Support': [
                { 'How do I return a product?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can I exchange an item?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'How do I cancel my order?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'What\'s the status of my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'Can you issue my refund to a different card if my card is canceled, lost, expired, or stolen?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' },
                { 'I cancelled my order. How will I receive my refund?': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sed lacus non condimentum. Sed sapien augue, ornare non eros eu, bibendum pulvinar purus. Aenean eu blandit elit, quis tincidunt turpis.' }
            ]
        };
        console.log(this.faqs);
        this.questions = Object.keys(this.faqs);
        console.log(this.questions);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.menuCtrl.enable(false, 'end');
        this.menuCtrl.enable(true, 'start');
    }
    open(i, question) {
        return __awaiter(this, void 0, void 0, function* () {
            let modal = yield this.modalController.create({
                component: FaqPage,
                componentProps: { value: Object.values(this.faqs)[i], title: question }
            });
            return yield modal.present();
        });
    }
};
FaqsPage = __decorate([
    Component({
        selector: 'app-faqs',
        templateUrl: './faqs.page.html',
        styleUrls: ['./faqs.page.scss'],
    }),
    __metadata("design:paramtypes", [ModalController, MenuController])
], FaqsPage);
export { FaqsPage };
//# sourceMappingURL=faqs.page.js.map