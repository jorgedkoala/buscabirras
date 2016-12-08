import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Premio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-premio',
  templateUrl: 'premio.html'
})
export class Premio {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PremioPage Page');
  }

}
