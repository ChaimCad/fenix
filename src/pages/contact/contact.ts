import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  

  constructor(public navCtrl: NavController) {

  }

  public para; public node; public sla; public element; public aaa
  public count = 0; public teste:string="0"
  public Adicionar(){
    
    
    console.log(this.count);
    //this.para = document.createElement("input");
  //  this.para.setAttribute("type", "text");
   // this.element = document.getElementById("div1").appendChild(this.para);
    
   // console.log(this.element)
    
    console.log(this.teste)
    
    //var pega_elemento = document.getElementById(this.teste);
    //pega_elemento.setAttribute("type", "text");
    this.count++;
    this.teste = this.count.toString();

    this.para = document.createElement("input");
    
    this.aaa = this.para.setAttribute("type", "text");

    this.element = document.getElementById("div1").appendChild(this.aaa);
    

    //console.log(document.getElementById('teste').id = this.teste.toString());




    
  }

}
