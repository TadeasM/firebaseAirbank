import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicAccountPage } from './basic-account';

@NgModule({
  declarations: [
    BasicAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicAccountPage),
  ],
})
export class BasicAccountPageModule {}
