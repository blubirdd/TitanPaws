import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutDogFoodPageRoutingModule } from './about-dog-food-routing.module';

import { AboutDogFoodPage } from './about-dog-food.page';
import { MyFilterPipe } from 'src/app/pipes/my-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutDogFoodPageRoutingModule,
    
  ],
  declarations: [AboutDogFoodPage, MyFilterPipe],

  exports: [
    MyFilterPipe
]
})
export class AboutDogFoodPageModule {}
