import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import {AngularFireModule} from "angularfire2";
import {FIREBASE_CREDENTIALS} from './firebase.credentials'
import {SmartReviewPage} from "../pages/smart-review/smart-review";
import {BasicAccountsComponent} from "../components/basic-accounts/basic-accounts";
import {SavingAccountsComponent} from "../components/saving-accounts/saving-accounts";
import {BasicAccountPage} from "../pages/basic-account/basic-account";
import {SavingAccountPage} from "../pages/saving-account/saving-account";
import {AngularFireDatabaseModule} from "angularfire2/database";

@NgModule({
  declarations: [
    MyApp,
    SmartReviewPage,
    BasicAccountsComponent,
    SavingAccountsComponent,
    BasicAccountPage,
    SavingAccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Firebase init credentials
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Firebase Database module to interact
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SmartReviewPage,
    BasicAccountPage,
      SavingAccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
