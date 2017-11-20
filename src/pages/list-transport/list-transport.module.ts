import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTransportPage } from './list-transport';
import { TransportProvider } from '../../providers/transport/transport'
import { TransportModalPage } from '../transport-modal/transport-modal'


@NgModule({
  declarations: [
    ListTransportPage,
    TransportModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTransportPage),
  ],
  providers:[
    TransportProvider
  ],
  entryComponents: [
    TransportModalPage
  ]
})
export class ListTransportPageModule {}
