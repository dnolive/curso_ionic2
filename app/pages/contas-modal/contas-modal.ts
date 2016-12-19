import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contas-modal/contas-modal.html',
})
export class ContasModalPage {
  constructor(private nav: NavController, private view: ViewController) {
    
  }

  fechar() : void {
    this.view.dismiss();
  }
}
