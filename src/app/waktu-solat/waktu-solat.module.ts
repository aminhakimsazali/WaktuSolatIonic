import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WaktuSolatPage } from './waktu-solat.page';

const routes: Routes = [
  {
    path: '',
    component: WaktuSolatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WaktuSolatPage]
})
export class WaktuSolatPageModule {}
