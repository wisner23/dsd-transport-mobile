import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { TransportProvider } from '../../providers/transport/transport'
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-transport-modal',
  templateUrl: 'transport-modal.html',
})
export class TransportModalPage {

  @ViewChild('name') name;
  transport: any = {};
  error: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public transportProvider: TransportProvider, public viewCtrl: ViewController,
    public toastCtrl: ToastController) {

      if (this.navParams.data.id) {
        this.transportProvider.getTransportById(this.navParams.get('id')).subscribe(data => {
          this.transport = data;
        });
      }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  save(form: NgForm) {
    let update: boolean = form['id'];
    this.transportProvider.save(form).subscribe(result => {
      let toast = this.toastCtrl.create({
        message: 'Transporte "' + form.name + '" ' + ((update) ? 'atualizado' : 'adicionado') + '.',
        duration: 2000
      });
      toast.present();
      this.dismiss();
    }, error => this.error = error)
  }


  ionViewDidLoad() {
    setTimeout(() => {
      this.name.setFocus();
    },150);
  }

}
