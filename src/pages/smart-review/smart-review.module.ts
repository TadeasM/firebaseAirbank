import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartReviewPage } from './smart-review';

@NgModule({
  declarations: [
    SmartReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(SmartReviewPage),
  ],
})
export class SmartReviewPageModule {}
