import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';


@Component({
  templateUrl: 'build/app.html'
})

export class MyApp {

  pages: Array<{
    component: any,
    title: string,
    icon: string
  }>;

  home: any     = HomePage;
  rootPage: any = this.home;

  constructor(platform: Platform) {
    this.pages = [
      {component: HomePage,
      title: 'Início',
      icon: 'home'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you cmean do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page): void {
    this.rootPage = page;
  }

}

ionicBootstrap(MyApp);
