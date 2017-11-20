import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportModalPage } from './transport-modal';

@NgModule({
  declarations: [
    TransportModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportModalPage),
  ],
})
export class TransportModalPageModule {}
