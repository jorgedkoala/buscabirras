import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Avatar } from '../pages/avatar/avatar';
import { Premio } from '../pages/premio/premio';
import { Servicios } from '../providers/servicios';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Avatar,
    Premio
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Avatar,
    Premio
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Servicios]
})
export class AppModule {}
