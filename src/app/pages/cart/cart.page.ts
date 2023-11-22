import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/services/cart.service';
import { CartService } from 'src/app/services/cart.service';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: Product[] = [];


  constructor(private cartService: CartService, private modalCtrl:
    ModalController, private route: Router) { }
    

    ngOnInit() {
      this.cart = this.cartService.getCart();

 
      
      }

      decreaseCartItem(product){
        this.cartService.decreaseProduct(product);
        }

        increaseCartItem(product){
        this.cartService.addProductFromCart(product);
        }
        
        removeCartItem(product){
        this.cartService.removeProduct(product);
        }

        getTotal(){
        return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
        }

        close(){
          //check if its on home page
       if(this.route.url=="/home" || this.route.url=="/about-dog-food"){
        this.modalCtrl.dismiss();
       
       }
       else{
        this.route.navigate(['/home']);
      
       }
        
        }
       
        checkout()
        {

        }
     

}
