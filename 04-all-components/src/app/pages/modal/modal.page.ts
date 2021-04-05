import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  modal: HTMLIonModalElement;

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal() {
    await this.presentModal();
    
    // const {data} = await this.modal.onDidDismiss();
    // console.log('onDidDismiss');
    // console.log(data);
    
    const {data} = await this.modal.onWillDismiss();
    console.log('onDidDismiss');
    console.log(data);
  }

  async presentModal() {
    this.modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Gastón',
        pais: 'Argentina'
      }
    });
    return await this.modal.present();
  }
}
