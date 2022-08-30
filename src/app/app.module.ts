import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

import { environment } from 'src/environments/environment';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http,RequestOptions,Headers } from '@angular/http';
import { Camera } from '@ionic-native/camera/ngx';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AddAddressPage } from 'src/app/pages/add-address/add-address.page';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Device } from '@ionic-native/device/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { StarRatingModule } from 'ionic5-star-rating';
import { CodeInputModule } from 'angular-code-input';
import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { OwlModule } from 'ngx-owl-carousel';
import { InsufficientPage } from './pages/insufficient/insufficient.page';
import { ProfileModalPage } from './pages/profile-modal/profile-modal.page';

export function customTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
  AppComponent,
  MenuComponent,
  SigninComponent,
  UpdateComponent,
  ProfileModalPage,
  AddAddressPage,
  InsufficientPage
  ],
  entryComponents: [
  UpdateComponent,
  MenuComponent,
  SigninComponent,
  ProfileModalPage,
  AddAddressPage,
  InsufficientPage
  ],
  imports: [
  BrowserModule,
    OwlModule,
    ReactiveFormsModule,
    StarRatingModule,
    FormsModule,
    CodeInputModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,GooglePlaceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: customTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AndroidPermissions,
    Diagnostic,
    Geolocation,
    OneSignal,
    Camera,
    SocialSharing,
    CallNumber,
    AppRate,
    EmailComposer,
    FirebaseAuthentication,
    DatePicker,
    Device,
    Http,
    DocumentViewer,
    OpenNativeSettings,
    FirebaseConfig,
    FileOpener,
    AppVersion,
    File,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
