import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { PgForma } from '../../models/pgforma';
import { BancosDao } from '../../dao/bancos-dao';
import { Banco } from '../../models/banco';

@Component({
  templateUrl: 'build/pages/pgformas/pgformas-modal.html',
})

export class PgFormasModalPage {

  bancos: Array<Banco>;
  pgforma: PgForma;

  constructor(private nav: NavController,
    private view: ViewController, private params: NavParams) {

    this.pgforma = params.get("param") || new PgForma();

    this.retornarBancos();
  }

  retornarBancos() : void {
    new BancosDao().retornar( (dados) => {
      this.bancos = dados;
    });
  }

  salvar() : void {
    this.view.dismiss(this.pgforma);
  }

  fechar() : void {
    this.view.dismiss();
  }

}
