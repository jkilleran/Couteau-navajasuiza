import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiremePage } from './hireme.page';

const routes: Routes = [
  {
    path: '',
    component: HiremePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiremePageRoutingModule {}
