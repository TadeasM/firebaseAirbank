import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {SavingAccountPage} from "../../pages/saving-account/saving-account";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

/**
 * Generated class for the SavingAccountsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'saving-accounts',
  templateUrl: 'saving-accounts.html'
})
export class SavingAccountsComponent {

  savingAccountRef$ : FirebaseListObservable<any[]>


  constructor(private navCtrl: NavController, private navParams: NavParams, private db: AngularFireDatabase) {
    this.savingAccountRef$ = this.db.list('savingAccounts');
    console.log(this.savingAccountRef$);
  }

  navigateToSavingAccount(par) {
    console.log(par);
    this.navCtrl.push(SavingAccountPage)
  }
}
