import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

   public cartelera: any;
   public populares: any;
   public popularesKids: any;


  constructor(public _ps: PeliculasService) {

    this._ps.getCartelera().subscribe( data => { this.cartelera = data; });

    this._ps.getPopulares().subscribe( data => { this.populares = data; });

    this._ps.getPopularesKids().subscribe( data => { this.popularesKids = data; });
  }

  ngOnInit() {
  }

}
