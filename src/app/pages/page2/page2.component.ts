import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  palabra: string = 'PAGINA SECUNDARIA';

  constructor() { }

  ngOnInit(): void {
  }

  present() {
    this.palabra = 'HOLA, YA TE ENCUENTRAS EN LA PÁGINA 2'
  }

}
