import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditProvider } from '../../providers/reddit/reddit';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista:any;
  constructor(public navCtrl: NavController, public provider:RedditProvider) {
    provider.getJson().subscribe(
      data=>{
        //console.log("txt: " + dados.data.children);
        this.lista = data.data.children;
      },erro=>{
        
      }
    );
    
   //this.lista = [{titulo:"teste"}, {titulo:"teste 2"}];
  }

}
