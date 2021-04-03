import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { testimonyModel } from 'src/app/models/testimony';
import { TestimoniesService } from 'src/app/service/testimonies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public carga: boolean;                          // variable para manejar una pantalla de carga del slider en un inicio (se esta trayendo datos de la api)
  public listTestimony: Array<testimonyModel>;    //nuestro array de testimonios
  public myStyle;                                 // nuestro objeto que tiene los nuevos stylos css que se agregaran
  public waitClick: boolean;                      // variable buleana para desabilitar el boton de derecha e izquierda al hacer click y esperar que acabe la animación
  public colorFond;

  constructor( private testimoniesService: TestimoniesService) {
    this.myStyle = {};
    this.colorFond = {};
    this.listTestimony = [];
    this.carga = true;
    this.waitClick = false;
  }

  ngOnInit(): void {
    // Extrayendo datos de la API usando el servicio testimoniesService
    this.testimoniesService.getTestimonies()
      .subscribe( resp => {
        this.listTestimony = resp;
        this.setPosition(0.5);
        this.carga = false;
        this.waitClick = true;
        this.runAuto();
      })

  }

  // ejecuta la función de runRight cada 8 segundos automaticamente
  runAuto() {
    setInterval(() => {
      if (this.waitClick){
        this.runPosition(1);
      }
    },8000)
  }

  // función de acción al hacer click en el botom derecho
  setPosition(pos: number){
    if ( pos == -1){
      this.myStyle = {
        'margin-left': '-100%',
        'transition': 'none',
        'width': `${this.listTestimony.length*100}%`
      };
    }else {
      this.myStyle = {
        'margin-left': `${pos*-200}%`,
        'transition': 'all 0.5s',
        'width': `${this.listTestimony.length*100}%`
      };
    }
  }

  // función de acción al hacer click en el botom derecho o izquierdo
  runPosition(tipo: number): void {
    this.waitClick = false;
      this.setPosition(tipo);
      setTimeout(() => {
        this.refresh(tipo);
        this.waitClick = true;
      }, 500);
  }

  // reordenamiento de la lista de testimonios
  refresh(lado: number) {
    if ( lado == 1 ) {
      let aux = this.listTestimony.shift();
      this.listTestimony.push(aux);
      this.setPosition(-1);
    }else {
      let aux = this.listTestimony.pop();
      this.listTestimony.unshift(aux);
      this.setPosition(-1);
    }
  }

  //Aplica el color de fondo para el slider 
  fondSlider(op: number) {
    switch(op) {
      case 1: this.colorFond = {
        'background': 'blue'
      };break;
      case 2: this.colorFond = {
        'background': 'red'
      };break;
      case 3: this.colorFond = {
        'background': 'yellow'
      };break;
    }
  }


}
