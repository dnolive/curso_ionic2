import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Banco } from "../../models/banco";

@Component({
  templateUrl: 'build/pages/bancos/bancos-modal.html',
})

export class BancosModalPage {

  banco: Banco;

  constructor(private nav: NavController,
    private view: ViewController, private params: NavParams) {

    this.banco = params.get("param") || new Banco();
  }

  salvar() : void {
    this.view.dismiss(this.banco);
  }

  fechar() : void {
    this.view.dismiss();
  }

}
