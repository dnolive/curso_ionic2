import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {BancosPage} from './pages/bancos/bancos';
import {ContasPage} from './pages/contas/contas';
import {PgFormasPage} from './pages/pgformas/pgformas';
import {CaixaPage} from './pages/caixa/caixa';
import {MovimentoPage} from './pages/movimento/movimento';


@Component({
  templateUrl: 'build/app.html'
})

export class MyApp {

  pages: Array<{
    component: any,
    title: string,
    icon: string
  }>;

  rootPage: any = HomePage;

  constructor(platform: Platform, private menuCtrl: MenuController) {
    this.pages = [
      {component: HomePage,      title: 'Início',              icon: 'home'},
      {component: BancosPage,    title: 'Bancos',              icon: 'ios-briefcase'},
      {component: ContasPage,    title: 'Contas',              icon: 'ios-folder-open'},
      {component: PgFormasPage,  title: 'Formas de Pagamento', icon: 'bookmarks'},
      {component: MovimentoPage, title: 'Movimento',           icon: 'cart'},
      {component: CaixaPage,     title: 'Caixa',               icon: 'cash'}
    ];

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page: any): void {
    this.rootPage = page.component;
    this.menuCtrl.close();
  }

}

ionicBootstrap(MyApp);
