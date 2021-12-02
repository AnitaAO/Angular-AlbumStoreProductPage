import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';


  constructor() { }
  getAlbum(id:number)

}
