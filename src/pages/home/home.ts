import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CalenderPage } from '../calender/calender';
import { ReportPage } from '../report/report';
import { SocialPage } from '../social/social';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  getCalender(){
  	this.modalCtrl.create(CalenderPage).present();
  }

  getReport(){
  	//this.modalCtrl.create(ReportPage).present();
  }

  getSocial(){
  	//this.modalCtrl.create(SocialPage).present();
  }

}
