import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SplashComponent } from './splash/splash.component';
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss'],
})
export class AppComponent {



 constructor(private modalController: ModalController) {
 this.presentSplash();
 }
 async presentSplash(){
 const modal = await this.modalController.create({
 component: SplashComponent,
 cssClass: 'my-custom-class'
 });
 return await modal.present();
 }


 profile='../assets/dogLogoYellow.png';
 name='Titan Paws';
 desc='Your best friends friend';

 changed=false;

change(){


    if (this.changed==false)
    {
        this.profile='../assets/dogLogoYellow.png';
        this.name='Titan Paws';
        this.desc='Your best friends friend';
        this.changed = true;

    }
    else{
        this.profile='../assets/john.jpg';
        this.name=' John Cena';
        this.desc='09383193412';
        this.changed = false;

    }
}
}
