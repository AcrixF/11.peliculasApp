import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  public pelicula: any;
  public regresa : string;
  public  busqueda: string;

  public constructor(public _ps:PeliculasService, public route: ActivatedRoute) {
      this.route.params.subscribe( parametros => {
        this.regresa = parametros['pag'];

        if (parametros['busqueda'])
          this.busqueda = parametros['busqueda'];

        console.log(this.regresa)

        this._ps.getMovie( parametros['id']).subscribe( p =>{
          this.pelicula = p;
        });
      });
  }

  ngOnInit() {
  }

}
