import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Avatar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-avatar',
  templateUrl: 'avatar.html'
})
export class Avatar {
perfiles: any[] =[{'nombre':'avayatr1','imagen':'avatar1.jpg'},{'nombre':'avayatr1','imagen':'avatar2.jpg'},{'nombre':'avayatr1','imagen':'avatar3.jpg'},{'nombre':'avayatr1','imagen':'avatar4.jpg'}];
mySlideOptions:any; 
  constructor(public navCtrl: NavController) {
    this.mySlideOptions = {
    initialSlide: 1,
    loop: true
  };
  }

  ionViewDidLoad() {
    console.log('Hello AvatarPage Page');

  }
  setAvatar(avatar){
    localStorage.setItem("avatar",avatar);
  }

}
