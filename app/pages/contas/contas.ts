import { Component } from '@angular/core';
import { NavController, ViewController, Modal, Alert, Toast } from 'ionic-angular';
import { Contas } from '../../dao/contas';
import { ContasModalPage } from '../contas/contas-modal';

@Component({
  templateUrl: 'build/pages/contas/contas.html',
})

export class ContasPage {

  private contas: Contas;
  private lista: Array<any>;

  constructor(private nav: NavController, private view: ViewController) {

    this.contas = new Contas();
    this.contas.retornar((dados) => {
      this.lista = dados;
    });

  }

  incluir(): void {
    let modal = Modal.create(ContasModalPage);

    modal.onDismiss((dados) => {
      if (dados) {
        this.contas.incluir(dados, (conta) => {
          this.lista.push(conta);
        });
        let toast = Toast.create({
          message: "Conta inserida com sucesso",
          duration: 3000,
          position: "bottom"
        });
        this.nav.present(toast);
      }
    })

    this.nav.present(modal);
  }

  alterar(obj) : void {
    let modal = Modal.create(ContasModalPage, {param: obj});

    modal.onDismiss((dados) => {
      if (dados) {
        this.contas.alterar(dados, (obj) => {
          alert("Conta alterada com suceso");
        })
      }
    });

    this.nav.present(modal);
  }

  excluir(obj) : void {
    let msg = Alert.create({
      title: "Exclusão",
      message: "Confirma a exclusão da conta "+obj.descricao+"?",
      buttons: [{
        text: "Sim",
        handler: () => {
          this.contas.excluir(obj, (data) => {
            let pos = this.lista.indexOf(obj);
            this.lista.splice(pos, 1);
          });
        }
      }, {
        text: "Não"
      }]
    });
    this.nav.present(msg);
  }

  fechar() : void {
    this.view.dismiss();
  }
}
