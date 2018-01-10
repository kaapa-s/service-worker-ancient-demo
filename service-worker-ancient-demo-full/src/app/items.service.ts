import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { 
  }


  public getItems(): Observable<any> {

    return this.http.get('http://localhost:3011/products')
      .pipe(map((d:any) => { console.log('done'); return d.products; }));
  
  }

}
