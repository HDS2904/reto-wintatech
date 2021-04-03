import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  palabra: string = 'PRIMERA PÁGINA';

  constructor() { }

  ngOnInit(): void {
  }

  present() {
    this.palabra = 'HOLA, YA TE ENCUENTRAS EN LA PÁGINA 1'
  }

}
