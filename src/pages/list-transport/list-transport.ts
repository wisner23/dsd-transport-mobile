import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { TransportProvider } from '../../providers/transport/transport'
import { TransportModalPage } from '../transport-modal/transport-modal'

export class Transport{
  id: string;
  name: string;
}

@IonicPage()
@Component({
  selector: 'page-list-transport',
  templateUrl: 'list-transport.html',
})
export class ListTransportPage {

  private transports: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public transportProvider: TransportProvider, public modalController: ModalController,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.transportProvider.getTransports()
    .subscribe(data =>  
      { 
        console.log(data);
        this.transports = data.transports; 
      });
  }

  openModal(transportId){
    let modal = this.modalController.create(TransportModalPage, transportId);
    modal.present();

    modal.onDidDismiss(() => this.ionViewDidLoad());
  }

  remove(transport){
    this.transportProvider.remove(transport.id).subscribe(data => {
      for (let i = 0; i < this.transports.length; i++) {
        if (this.transports[i] === transport) {
          this.transports.splice(i, 1);
          let toast = this.toastCtrl.create({
            message: 'Transporte "' + transport.name + '" removido.',
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      }
  
    })
  }

}
