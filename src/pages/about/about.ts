import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  public Caixa(){

  

    var textbox = document.createElement('input');
    textbox.type = 'text'; 
    console.log(textbox);
    //document.getElementById('area');
    var p = document.createElement('p');
    var dest = document.getElementById('caixa_txt');
    dest.appendChild(p);
    dest.appendChild(textbox);
    
    
    //dest.append('\n');
    //document.body.appendChild(textbox);

    //textbox.style.display = "none";
    
    
    //var clone = document.getElementById('area').cloneNode(true);
    //destino.appendChild (clone);
    //var camposClonados = clone.getElementsByTagName('input');
  }

}
