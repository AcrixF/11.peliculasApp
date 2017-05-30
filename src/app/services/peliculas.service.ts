import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = "9d2c990ecf186c892486bbeabc60cf59";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

 public constructor( private jsonp:Jsonp ) { }

 public getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( res=> res.json());
  }

  public buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( res=> res.json());
  }

  public getMovie(){
    let url = `https://api.themoviedb.org/3/movie/550?api_key=${this.apikey}`;
    return this.jsonp.get( url ).map(res => res.json());
  }

}
