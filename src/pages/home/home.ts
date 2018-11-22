import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


// import { LoginPage } from '../login/login';
import { PhotosPage } from '../photos/photos';
import { TakePicturePage } from '../take-picture/take-picture';
import {ProfilePage} from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photosTab: any;
  public profileTab: any

  constructor(
    private navCtrl: NavController,
    private modelCtrl: ModalController
  ) {
    this.photosTab = PhotosPage;
    this.profileTab = ProfilePage;
  }
  showSendPhoto(){
    let modal = this.modelCtrl.create(TakePicturePage);
    modal.present();
  }
}
