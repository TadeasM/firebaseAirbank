import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {BasicAccountPage} from "../../pages/basic-account/basic-account";
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database";

/**
 * Generated class for the BasicAccountsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'basic-accounts',
  templateUrl: 'basic-accounts.html'
})
export class BasicAccountsComponent {
  basicAccountRef$ : FirebaseListObservable<any[]>


  constructor(private navCtrl: NavController, private navParams: NavParams, private db: AngularFireDatabase) {
    this.basicAccountRef$ = this.db.list('basicAccounts');
    console.log(this.basicAccountRef$);
  }

  navigateToBasicAccount() {
    // navigate to basic account page
    this.navCtrl.push(BasicAccountPage);
  }

}
