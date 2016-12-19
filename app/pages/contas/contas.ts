import { Component } from '@angular/core';
import { NavController, ViewController, Modal } from 'ionic-angular';
import { ContasDao } from '../../dao/contas-dao';
import { ContasModalPage } from '../contas-modal/contas-modal';

@Component({
  templateUrl: 'build/pages/contas/contas.html',
})
export class ContasPage {

  dao: ContasDao;
  lista: Array<any>;

  constructor(private nav: NavController, private view: ViewController) {

    this.dao = new ContasDao();
    this.lista = this.dao.listar();

  }

  abrirTela(): void {
    let modal = Modal.create(ContasModalPage);
    this.nav.present(modal);
  }

  fechar() : void {
    this.view.dismiss();
  }
}
