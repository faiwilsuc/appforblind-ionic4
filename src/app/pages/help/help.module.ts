import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HelpPage } from './help.page';
import { TranslateModule } from '@ngx-translate/core';
import { MenuComponentModule } from 'src/app/components/menu/menu.module';

const routes: Routes = [
  {
    path: '',
    component: HelpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule,
    MenuComponentModule
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
