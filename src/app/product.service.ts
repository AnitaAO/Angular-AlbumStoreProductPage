import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Http } from '@angular/http'
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';


  constructor() { }
  getAlbum(id:number)

}
