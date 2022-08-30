import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { BackGuard } from './guard/back.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
    canActivate: [BackGuard]
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
    loadChildren: () => import('./pages/manage-address/manage-address.module').then( m => m.ManageAddressPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'refund',
    loadChildren: () => import('./pages/refund/refund.module').then( m => m.RefundPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'my-transaction',
    loadChildren: () => import('./pages/my-transaction/my-transaction.module').then( m => m.MyTransactionPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'support-list',
    loadChildren: () => import('./pages/support-list/support-list.module').then( m => m.SupportListPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/contactus/contactus.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'corporate',
    loadChildren: () => import('./pages/corporate/corporate.module').then( m => m.CorporatePageModule)
  },
  {
    path: 'payment-security',
    loadChildren: () => import('./pages/payment-security/payment-security.module').then( m => m.PaymentSecurityPageModule)
  },
  {
    path: 'add-prescription',
    loadChildren: () => import('./pages/add-prescription/add-prescription.module').then(m => m.AddPrescriptionPageModule),
    // canActivate: [AuthGuard]
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
    path: 'booking-detail',
    loadChildren: () => import('./pages/booking-detail/booking-detail.module').then(m => m.BookingDetailPageModule),
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
    path: 'risk/:name',
    loadChildren: () => import('./pages/risk/risk.module').then(m => m.RiskPageModule),
  },
  {
    path: 'habit/:name',
    loadChildren: () => import('./pages/habit/habit.module').then(m => m.HabitPageModule),
  },
  {
    path: 'risks',
    loadChildren: () => import('./pages/risks/risks.module').then(m => m.RisksPageModule),
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
    canActivate: [AuthGuard]
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
    path: 'test/:name',
    loadChildren: () => import('./pages/test/test.module').then(m => m.TestPageModule),
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
  {
    path: 'coupons',
    loadChildren: () => import('./pages/coupons/coupons.module').then(m => m.CouponsPageModule),
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'my-wallet',
    loadChildren: () => import('./pages/my-wallet/my-wallet.module').then( m => m.MyWalletPageModule)
  },
  {
    path: 'team/:name',
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamPageModule),
  },
  {
    path: 'cardiology',
    loadChildren: () => import('./pages/cardiology/cardiology.module').then( m => m.CardiologyPageModule)
  },
  {
    path: 'radiology',
    loadChildren: () => import('./pages/radiology/radiology.module').then( m => m.RadiologyPageModule)
  },
  {
    path: 'diagnostic-lab/:name',
    loadChildren: () => import('./pages/diagnostic-lab/diagnostic-lab.module').then(m => m.DiagnosticLabPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
