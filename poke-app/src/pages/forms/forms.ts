import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-forms',
  templateUrl: 'forms.html',
})
export class FormsPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormsPage');
  }

  presentModal() {
    let exemploModal = this.modalCtrl.create(ModalPage);
    exemploModal.present();
  }

  paraHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
