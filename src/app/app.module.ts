import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CalenderPage } from '../pages/calender/calender';
import { ReportPage } from '../pages/report/report';
import { SocialPage } from '../pages/social/social';
import { NewFeedPage } from '../pages/new-feed/new-feed';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CalenderPage,
    ReportPage,
    SocialPage,
    NewFeedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CalenderPage,
    ReportPage,
    SocialPage,
    NewFeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
