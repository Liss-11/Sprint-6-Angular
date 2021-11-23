import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  comienza: boolean = true;
  comienzo = ():void => {
    this.comienza = false;
  }

  
  frases: { txt:string, imagen:string }[] = [
    {
      txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
      imagen: "assets/img/1.jpg"
    },
    {
      txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.",
      imagen: "assets/img/2.jpg"
    },
    {
      txt: "L'heroi va decidir travessar la porta que el portava a casa",
      imagen: "assets/img/3.jpg"
    },
    {
      txt: "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció ...",
      imagen: "assets/img/4.jpg"
    }

  ]
  

  constructor() {
    
  }

  ngOnInit(): void {
  }

  

}
