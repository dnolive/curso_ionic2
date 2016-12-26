import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ContasDao } from '../../dao/contas-dao';
import { Caixa } from "../../models/caixa";
import { Conta } from '../../models/conta';

@Component({
  templateUrl: 'build/pages/caixa/caixa-modal.html',
})

export class CaixaModalPage {

  private caixa: Caixa;
  private contas: Array<Conta>;

  constructor(private nav: NavController,
    private view: ViewController, private params: NavParams) {

    this.caixa = params.get("param") || new Caixa() ;

    this.preparar();
  }

  private preparar(callBack?) : void {
    new ContasDao().retornar((dados) => {
      this.contas = dados;
    })
  }

  salvar() : void {
    this.view.dismiss(this.caixa);
  }

  fechar() : void {
    this.view.dismiss();
  }

}
