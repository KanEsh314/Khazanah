import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calender',
  templateUrl: 'calender.html',
})
export class CalenderPage {

  startDate: Date;
  calender : any;

  constructor(public calendar: Calendar ,public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
      this.calendar.createCalendar('MyCalendar').then((msg) => { 
        console.log(msg);
        this.calendar = msg; 
      },(err) => { 
        console.log(err); 
      }
    );

    this.calendar.openCalendar(this.startDate);
  }

  getClose(){
  	this.viewCtrl.dismiss();
  }

}
