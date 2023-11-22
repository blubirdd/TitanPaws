import { Component,  NgModule, OnInit} from '@angular/core';

import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

import { AlertController } from '@ionic/angular';  
import { CartService} from 'src/app/services/cart.service';
import { CartPage } from '../cart/cart.page';






@Component({
  selector: 'app-about-dog-food',
  templateUrl: './about-dog-food.page.html',
  styleUrls: ['./about-dog-food.page.scss'],
})




export class AboutDogFoodPage implements OnInit{

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  amount= [];
  cat = 'Dry Food';

  
  itemCategory =[
    { "image" :"assets/dogFoodCategories/dry.png", "title" : "Dry Food"},

      
    {"image" :"assets/dogFoodCategories/canned.png", "title" : "Canned Food"},

    {"image" :"assets/dogFoodCategories/moist.png", "title" : "Moist"}
    ];



  slideOpts =
  {
    initialSlide: 0,
    spaceBetween: -25,
    slidesPerView: 3.3,
    slidesOffsetBefore: 6

  };

  constructor(private cartService: CartService, private modalCtrl: ModalController, public alertCtrl: AlertController) {}

  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  //  this.amount = this.cartService.getProducts();
  }

  async addToCart(product) {
    
    //add produt
    this.cartService.addProduct(product);
  
         //alert
         if(product.addAmount > 0)
         {
          const alert = await this.alertCtrl.create({  
            header: 'Success!',  
             
            message: 'Item successfully added to cart.',  
            buttons: ['OK']  
          });  
          await alert.present();  
          const result = await alert.onDidDismiss();  
          
      
          //alert end

          
          this.cartService.resetAddAmount(product);

        }
}

  async openCart() {
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass: 'cart-page'
    });

    modal.present();
  }





  add(product) {
    this.cartService.addAmount(product);
   
   
  }

  subtract(product) {

    this.cartService.decreaseAmount(product);

   }



   /////CATEGORY FUNCTIONS
  displayCat1() {
 
   this.cat = 'Dry Food';

 
  }


   displayCat3() {
 
    this.cat = 'Canned';
 
  
   }

   displayCat4() {
 
    this.cat = 'Moist';
 
  
   }

   displayCat5() {
 
    this.cat = 'Treats';
 
  
   }






}

