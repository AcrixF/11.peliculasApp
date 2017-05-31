import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = "9d2c990ecf186c892486bbeabc60cf59";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  public peliculas: any = [];

 public constructor( private jsonp:Jsonp ) { }

 public getCartelera(){
   let desde = new Date();
   let hasta = new Date();

   hasta.setDate(hasta.getDate() + 7 );

   let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1 }-${ desde.getDay()}`;
   let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1 }-${ hasta.getDay()}`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( respuesta => respuesta.json()).map( r => r.results);
 }

 public getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( res => res.json().results);
  }

  public getPopularesKids(){
    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( res => res.json().results);
  }

  public buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ).map( res=> {
      res.json().results;
      this.peliculas = res.json().results;
    });
  }

  public getMovie( id: string ){
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).map(res => res.json());
  }


}
