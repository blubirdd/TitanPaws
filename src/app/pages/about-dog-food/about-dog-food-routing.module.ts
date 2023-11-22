import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutDogFoodPage } from './about-dog-food.page';

const routes: Routes = [
  {
    path: '',
    component: AboutDogFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutDogFoodPageRoutingModule {}
