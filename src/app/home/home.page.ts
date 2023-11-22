import { Component, OnInit } from '@angular/core';
import { CartService } from './../services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartPage } from '../pages/cart/cart.page';
import { AlertController } from '@ionic/angular';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  amount= [];


  
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


////////////////////////////




  add(product) {
    this.cartService.addAmount(product);
   
   
  }

  subtract(product) {

    this.cartService.decreaseAmount(product);

   }
  
  }











