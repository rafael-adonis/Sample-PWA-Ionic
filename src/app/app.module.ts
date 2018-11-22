import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PhotosPage } from '../pages/photos/photos';
import { TakePicturePage } from '../pages/take-picture/take-picture';
import { SendPhotoPage } from '../pages/send-photo/send-photo';
import { ProfilePage } from '../pages/profile/profile';

export const environment = {
  firebase: {
    apiKey: "AIzaSyDBRdcbrLeyBRjUedhUxzPAHEJCc9oa1wU",
    authDomain: "mypetsaid-85d7c.firebaseapp.com",
    databaseURL: "https://mypetsaid-85d7c.firebaseio.com",
    projectId: "mypetsaid-85d7c",
    storageBucket: "mypetsaid-85d7c.appspot.com",
    messagingSenderId: "959153693323"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    TakePicturePage,
    SendPhotoPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    PhotosPage,
    TakePicturePage,
    SendPhotoPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
