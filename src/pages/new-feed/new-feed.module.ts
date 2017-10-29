import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFeedPage } from './new-feed';

@NgModule({
  declarations: [
    NewFeedPage,
  ],
  imports: [
    IonicPageModule.forChild(NewFeedPage),
  ],
})
export class NewFeedPageModule {}
