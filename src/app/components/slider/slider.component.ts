import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  listSlider: Array<Number>;

  public myStyle = {
    'margin-left': '0%',
    'transition': '0'
  };

  constructor() { 
  }

  ngOnInit(): void {
  }

  runLef(): void {
    console.log("IZQUIERDA");
    this.myStyle = {
      'margin-left': '0%',
      'transition': 'all 0.5s'
    };
  }

  runRight(): void {
    console.log("DERECHA");
    this.myStyle = {
      'margin-left': '-100%',
      'transition': 'all 0.5s'
    };
  }

  refresh() {
    
  }

}
