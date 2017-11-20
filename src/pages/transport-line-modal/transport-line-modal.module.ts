import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportLineModalPage } from './transport-line-modal';

@NgModule({
  declarations: [
    TransportLineModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TransportLineModalPage),
  ],
})
export class TransportLineModalPageModule {}
