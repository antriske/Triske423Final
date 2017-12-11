import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ErrPage } from "../err/err";
import { ListPage } from "../list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

 gotoErr() {
    this.navCtrl.push(ErrPage);
  }

  gotoList() {
      this.navCtrl.push(ListPage);
  }

}
