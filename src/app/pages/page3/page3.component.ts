import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  palabra: string = 'TERCERA PÁGINA';

  constructor() { }

  ngOnInit(): void {
  }

  present() {
    this.palabra = 'HOLA, YA TE ENCUENTRAS EN LA PÁGINA 3'
  }

}
