import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
const routes = [
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'otp',
        loadChildren: () => import('./pages/otp/otp.module').then(m => m.OtpPageModule)
    },
    {
        path: 'manage-address',
        loadChildren: () => import('./pages/manage-address/manage-address.module').then(m => m.ManageAddressPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'edit-profile',
        loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
    },
    {
        path: 'summary',
        loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule)
    },
    {
        path: 'privacy',
        loadChildren: () => import('./pages/privacy/privacy.module').then(m => m.PrivacyPageModule)
    },
    {
        path: 'terms',
        loadChildren: () => import('./pages/terms/terms.module').then(m => m.TermsPageModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
    },
    {
        path: 'my-transaction',
        loadChildren: () => import('./pages/my-transaction/my-transaction.module').then(m => m.MyTransactionPageModule)
    },
    {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
    },
    {
        path: 'reviews',
        loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsPageModule)
    },
    {
        path: 'support',
        loadChildren: () => import('./pages/support/support.module').then(m => m.SupportPageModule)
    },
    {
        path: 'offers',
        loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersPageModule)
    },
    {
        path: 'support-list',
        loadChildren: () => import('./pages/support-list/support-list.module').then(m => m.SupportListPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
    },
    {
        path: 'contactus',
        loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactUsPageModule)
    },
    {
        path: 'payment-security',
        loadChildren: () => import('./pages/payment-security/payment-security.module').then(m => m.PaymentSecurityPageModule)
    },
    {
        path: 'add-prescription',
        loadChildren: () => import('./pages/add-prescription/add-prescription.module').then(m => m.AddPrescriptionPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'members',
        loadChildren: () => import('./pages/members/members.module').then(m => m.MembersPageModule),
    },
    {
        path: 'bookings',
        loadChildren: () => import('./pages/bookings/bookings.module').then(m => m.BookingsPageModule),
    },
    {
        path: 'health-packages',
        loadChildren: () => import('./pages/health-packages/health-packages.module').then(m => m.HealthPackagesPageModule),
    },
    {
        path: 'faq',
        loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqPageModule),
    },
    {
        path: 'risk',
        loadChildren: () => import('./pages/risk/risk.module').then(m => m.RiskPageModule),
    },
    {
        path: 'health-habits',
        loadChildren: () => import('./pages/health-habits/health-habits.module').then(m => m.HealthHabitsPageModule),
    },
    {
        path: 'search-labs',
        loadChildren: () => import('./pages/search-labs/search-labs.module').then(m => m.SearchLabsPageModule),
    },
    {
        path: 'cart',
        loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule),
    },
    {
        path: 'tests',
        loadChildren: () => import('./pages/tests/tests.module').then(m => m.TestsPageModule),
    },
    {
        path: 'packages',
        loadChildren: () => import('./pages/packages/packages.module').then(m => m.PackagesPageModule),
    },
    {
        path: 'test-detail',
        loadChildren: () => import('./pages/test-detail/test-detail.module').then(m => m.TestDetailPageModule),
    },
    {
        path: 'checkout',
        loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule),
    },
    {
        path: 'rating',
        loadChildren: () => import('./pages/rating/rating.module').then(m => m.RatingPageModule),
    },
    {
        path: 'cancel',
        loadChildren: () => import('./pages/cancel/cancel.module').then(m => m.CancelPageModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map