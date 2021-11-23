import { HomeComponent } from './../home/home.component';
import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.css']
})
  

export class EscenaComponent implements OnInit {


  @Input() frasesTotal: any;
  
  currentSentence: object;
  limite1: boolean = true;
  limite2: boolean = false;
  i: number = 0;
  imagen: string;
  
  
  

  constructor() { }

  ngOnInit(): void {
    this.currentSentence = this.frasesTotal[0];
    this.imagen = this.frasesTotal[0].imagen;
  }

  prev = ():void => {
    this.i--;
    if (this.i > 0) {
      
      if (this.limite2) {
        this.limite2 = false;
      }

    } else {
      this.limite1 = true;
      
    }
    
    this.imagen = this.frasesTotal[this.i].imagen;

    this.currentSentence = this.frasesTotal[this.i];
  }

  next=():void => {
    this.i++;
    if (this.i < (this.frasesTotal.length-1)) {
      
      if (this.limite1) {
        this.limite1 = false;
      }
    } else {
      this.limite2 = true;
    }

    this.imagen = this.frasesTotal[this.i].imagen;

    this.currentSentence = this.frasesTotal[this.i];

  }


}
