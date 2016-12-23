import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Conta } from "../../models/conta";

@Component({
  templateUrl: 'build/pages/contas/contas-modal.html',
})

export class ContasModalPage {

  conta: Conta;

  constructor(private nav: NavController,
    private view: ViewController, private params: NavParams) {

    this.conta = params.get("param") || {nome : ""};
  }

  salvar() : void {
    this.view.dismiss(this.conta);
  }

  fechar() : void {
    this.view.dismiss();
  }
}
