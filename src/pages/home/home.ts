import { Component, trigger, state, style, transition, animate, keyframes, NgZone } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController,AlertController } from 'ionic-angular';
import {Avatar} from '../avatar/avatar';
import {Premio} from '../premio/premio';
import {Servicios} from '../../providers/servicios';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('mover', [
 //     state('derecha', style({transform: 'translate3d(110px,0,0)'})),
 //     state('izquierda', style({transform: 'translate3d(-110px,0,0)'})),
 //     state('arriba', style({transform: 'translate3d(0,-110px,0)'})),
 //     state('abajo', style({transform: 'translate3d(0,110px,0)'})),
 //     transition('quieto => derecha',animate('1400ms ease-in')
 //     )
    ])]
})
export class HomePage {
public size: number = 400;
public fila: number = 17;
public casillas;
public posicion: number;
public regalos: any;
public regalosposicion:number[]=[];
public movimiento: String = 'quieto';
public usoavatar: String;

  constructor(public navCtrl: NavController, public alert: AlertController, public zone: NgZone, public servicios: Servicios) {
     this.casillas = new Array(this.size);
     localStorage.getItem("posicion") === null ? localStorage.setItem("posicion", "24"):'';
     localStorage.getItem("avatar") === null ? localStorage.setItem("avatar", "avatar1.jpg"):'';
     this.posicion = parseInt(localStorage.getItem("posicion"));
     this.usoavatar = "./assets/img/"+localStorage.getItem("avatar");
  }

ionViewDidLoad(){
  this.servicios.getGifts().subscribe
  (data=>{
    this.regalos = data.data;
    console.log("regalos",this.regalos);
   for(let element of data.data){
    this.regalosposicion.push(parseInt(element.posicion));
    console.log("posiciones",element.posicion);
  };

  });

  
}


nuevocodigo(){
BarcodeScanner.scan().then((barcodeData) => {
 alert(barcodeData.text);
}, (err) => {
   console.log(err);
});

// let prompt = this.alert.create({
//       title: 'Login',
//       message: "Enter a name for this new album you're so keen on adding",
//       inputs: [
//         {
//           name: 'codigo',
//           placeholder: 'código'
//         },
//       ],
//       buttons: [
//         {
//           text: 'Cancel',
//           handler: data => {
//             console.log('Cancel clicked');
//           }
//         },
//         {
//           text: 'Save',
//           handler: data => {
//             console.log('Saved clicked');
//             this.mueve(data.codigo);
//           }
//         }
//       ]
//     });
//     prompt.present();
}
mueve(codigo){
console.log(codigo);
let nuevacasilla;
switch (codigo){
  case "1":
  console.log("codigo",codigo);
  //this.movimiento = 'arriba';
  nuevacasilla = this.posicion-this.fila;
  break;
  case "2":
  //this.movimiento = 'quieto';
  this.movimiento = 'derecha';
  nuevacasilla = this.posicion+1;
  break;
  case "3":
  //this.movimiento = 'abajo';  
  nuevacasilla = this.posicion+this.fila;
  break;
  case "4":
  //this.movimiento = 'izquierda';
  nuevacasilla = this.posicion-1;
  break;
  }
  localStorage.setItem("posicion",nuevacasilla.toString());
  console.log("hay moivimiento", nuevacasilla);

  //this.movimiento = "quieto";
  //this.zone.run(()=>{console.log('reloaded')});
  //console.log("hay moivimiento", localStorage.getItem("posicion"));
  let destino = "id" + nuevacasilla;
  this.posicion = nuevacasilla;
  document.getElementById(destino).appendChild(document.getElementById("avatar"));
    if (this.regalosposicion.indexOf(nuevacasilla) >=0 ){
    this.navCtrl.push(Premio);
  }
}


avatar(){
  this.navCtrl.push(Avatar)
}


}
