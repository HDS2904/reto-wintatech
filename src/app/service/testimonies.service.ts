import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

import { testimonyModel } from '../models/testimony';

@Injectable({
  providedIn: 'root'
})
export class TestimoniesService {

  private listTestimonies: testimonyModel[];
  private url: string;

  constructor( private http: HttpClient ) {
    this.listTestimonies = [];
    this.url = 'https://rest-server-one.herokuapp.com/';
  }

  // comunicación con la API por GET
  getTestimonies() {
    let params = new HttpParams().set('desde', '0').set('limite','10');
    return this.http.get(`${this.url}testimony/`,{params})
    .pipe(
      map( this.tratamiento )
    );
  }

  // filtrado de la respuesta de nuestra API
  private tratamiento( testimonyObj: object): testimonyModel[] {
    const testimonies: testimonyModel[] = [];
    if ( testimonyObj === [] ){
      return [ ];
    }else {
      console.log(testimonyObj["testimony"] );
      testimonyObj["testimony"].forEach( item => {
        const ani: testimonyModel = {
          photo: item.photo,
          nameUser: item.nameUser,
          opinion: item.testimony
        };
        testimonies.push(ani);
      });
    }
    return testimonies;
  }

}
