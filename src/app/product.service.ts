import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  

  constructor(private _http: Http) { }
  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl).map(response => <album>response.json());
  }
  getProducts(): Observable<Product[]>{
    return this._http.get(this._productUrl).map(response => <Product[]>response.jason());
  }

}
