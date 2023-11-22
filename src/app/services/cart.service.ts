import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

export interface Product{
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
  addAmount: number;
  category: string;
  details: string;
 }

 
 

@Injectable({
  providedIn: 'root'
})


  export class CartService {

    data: Product[] =[
    { id: 1, name: 'Pedigree Chicken', price: 120.00, amount: 1, image:
   'assets/pedigreeChicken.jpg', addAmount: 1, category:'Dry Food', details:'Growth and Protection Chicken & Vegetable Flavor Dog Food is formulated to help your pup keep up with the big dogs. This puppy formula is made with DHA for healthy brain development.'},

    { id: 2, name: 'Wellness Health', price: 350, amount: 1, image:
   'assets/wellness.jpeg', addAmount: 1, category:'Dry Food', details:'Wellness Complete Health is a grain-inclusive dry dog food using a significant amount of named meat meals as its dominant source of animal protein. Above-average protein. Near-average fat. And near-average carbs when compared to other dry dog foods.'},

   { id: 3, name: 'Orijen Original', price: 840, amount: 1, image:
   'assets/orijen.jpg', addAmount: 1, category:'Dry Food', details:'With rich inclusions of Wholeprey animals, ORIJEN dog food is made with the most nutrient-dense, succulent parts of the prey to deliver the nutrition dogs need. The result is a diet for your canine companion that is beyond comparison.'},

   { id: 4, name: 'Purina Alpo Beef', price: 350, amount: 1, image:
   'assets/alpo.jpg', addAmount: 1, category:'Canned', details:'Every bag is packed with all the good stuff your adult dog needs. Once he chomps into these hearty shapes and crunchy textures with savory beef flavor, there’s no stopping him from devouring every last crumb.'
   },

   { id: 5, name: 'Acana Prairie', price: 452, amount: 1, image:
   'assets/acana.png', addAmount: 1, category:'Dry Food', details:'Every ACANA® recipe is thoughtfully crafted from start to finish with premium ingredients. With the highest protein offering in ACANA pet foods, our ACANA Highest Protein Wild Prairie® Recipe is rich with 70% quality animal ingredients.'
   }, 
   
   { id: 6, name: 'Canidae Dog Food', price: 254, amount: 1, image:
   'assets/canidae.jfif', addAmount: 1, category:'Canned', details:'Canidae® PURE Grain-Free limited ingredient formulas offer your dog a well-rounded meal that’s been crafted with their health and well-being in mind. Each recipe made using 10 or fewer key ingredients that are easily recognizable.'
   },
   
   { id: 7, name: 'Merrick Classic', price: 450, amount: 1, image:
   'assets/merrick.jpg', addAmount: 1, category:'Canned', details:'Merrick Wet Dog Food features grain free, high protein set of recipes that are all rich in high quality protein, real meat, and omega fatty acids. Our Grain Free recipes are high in protein and the all-natural ingredients are perfect for dogs with food sensitivities.'
   },

   { id: 8, name: 'Instinct Original', price: 399, amount: 1, image:
   'assets/instinct.jfif', addAmount: 1, category:'Canned', details:'Instinct Original is a grain-free canned dog food using a significant amount of named meats as its dominant source of animal protein. Above-average protein. Above-average fat. And below-average carbs when compared to other canned dog foods.'
   },
   
   { id: 9, name: 'Nutrish Dog Food', price: 1199, amount: 1, image:
   'assets/nutrish.jfif', addAmount: 1, category:'Moist', details:'Rachael Ray Nutrish Real Chicken & Veggies Recipe dry dog food, is a delicious, premium dog food recipe made the Rachael Ray way, with lots of love and only the best, high-quality ingredients. The #1 ingredient is real chicken, which is a good source of protein.'
   },

   { id: 10, name: 'Caesar Gourmet', price: 999, amount: 1, image:
   'assets/cesar.jpg', addAmount: 1, category:'Moist', details:'Dogs with sophisticated palates will enjoy a rich culinary experience with Cesar Canine Cuisine Gourmet Wet Dog Food. From large to small breeds, indulge your pampered pooch with savory dog food featuring a variety of poultry selections that make their mouth water and tail wag.'
   },

   { id: 11, name: 'Purina Beyond', price: 699, amount: 1, image:
   'assets/purina.png', addAmount: 1, category:'Moist', details:'Purina Beyond natural dog food contains real meat, poultry, and fish plus essential nutrients for your dog. Plus it contains no corn, wheat, or soy.'
   },

   { id: 12, name: 'Jerky Sticks', price: 299, amount: 1, image:
   'assets/jerkysticks.jpg', addAmount: 1, category:'Treats', details:'High-quality, all-American beef is the first ingredient in these treats, and you can smell the natural, smokey flavor. Unlike other jerky treats that are rubbery and obviously not made with real meat, these treats from Rocco & Roxie are so tender that you can easily rip them into smaller pieces with your fingers.'
   },

   { id: 13, name: 'Buddy Biscuits', price: 289, amount: 1, image:
   'assets/buddy.jpeg', addAmount: 1, category:'Treats', details:'If a balanced treat is a concern for your pet, Buddy Biscuit makes the best dog treats that can be used to help keep the dog healthy in between regular vet visits. These treats for dogs are also low in fat and nutritionally complete for dogs of all ages.'
   },

   { id: 14, name: 'Blue Buffalo', price: 489, amount: 1, image:
   'assets/bluebuffalo.jfif', addAmount: 1, category:'Treats', details:'This Blue Buffalo Duck Biscuits is a 100% grain-free baked dog treat. These treats are made in the United States with ingredients that are sourced in the U.S., Canada, New Zealand, Europe, and Australia.'
   }


  

   
    ];


    

    private cart = [];
    private cartItemCount = new BehaviorSubject(0);

   
  constructor() { }


  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
 

  getCartItemCount() {
    return this.cartItemCount;
  }

  addAmount(product)
  {
    product.addAmount += 1;
  }

  decreaseAmount(product)
  {
    if(product.addAmount >1){
    product.addAmount -= 1;
    }
  }

 resetAddAmount(product)
  {
   
        
    product.addAmount = 1;
  }

  

  addProduct(product) {


    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
      p.amount = p.amount + product.addAmount;
      //alert("ayo");
      // p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = product.addAmount;
      this.cart.push(product);
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
   
 // this.cartItemCount.next(this.cartItemCount.value + product.addAmount);

  }


  ///////////ADD PRODUCT FROM CART //////////////////
  addProductFromCart(product) {


    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {

      
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {

      this.cart.push(product);
      //new
      this.cartItemCount.next(this.cartItemCount.value + 1);
    }
 
  //default
  //this.cartItemCount.next(this.cartItemCount.value + product.addAmount);

  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
          //new
          this.cartItemCount.next(this.cartItemCount.value - 1);
        }
      }
    }
   // default 
   // this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
      //default  this.cartItemCount.next(this.cartItemCount.value - p.amount);

      //new
      this.cartItemCount.next(this.cartItemCount.value - 1);
      
        this.cart.splice(index, 1);
      }
    }
  }


}


