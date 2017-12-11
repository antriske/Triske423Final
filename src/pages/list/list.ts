import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  gifts = [
      {item: "Todd: Readers"},
      {item: "Alex: a gram"},
      {item: "Oma: Orbit gum"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

    addItem() {
        let prompt = this.alertCtrl.create({
            title: "Add Item",
            inputs: [
                {name: "item"}
            ],

            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Add Item",
                    handler:data => {
                        console.log(data);
                        this.gifts.push(data);
                    }
                },
            ]
        });

        prompt.present();
    }
    deleteItem(giftItem){
        let index = this.gifts.indexOf(giftItem);

        this.gifts.splice(index, 1)
    }
    editItem(giftItem){
        let prompt = this.alertCtrl.create({
            title: "Edit Item",
            inputs: [
                {name: "item",
                    placeholder: giftItem.item}
            ],

            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Save Item",
                    handler:data => {
                        let index = this.gifts.indexOf(giftItem);
                        if(index > -1){
                            this.gifts[index] = data;
                        }
                    }
                },
            ]
        });

        prompt.present();
    }
}
