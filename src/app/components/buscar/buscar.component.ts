import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  public  buscar: string = "";

  public constructor(public _ps: PeliculasService, public route:ActivatedRoute) {

    this.route.params.subscribe( parametros => {
      if (parametros['texto']){
        this.buscar = parametros['texto'];
        this.buscarPelicula( );
      }
    })

  }

  public ngOnInit() {
  }

  public buscarPelicula(){
    if ( this.buscar.length == 0){
      return;
    }

    this._ps.buscarPelicula( this.buscar ).subscribe();
  }

}
