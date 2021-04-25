import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _portalElements$: Observable<string[]> = of(["a","b","c","d", "e", "f"])
  private _typeElements$: Observable<string[]>= of(["a","b","c","d", "e", "f"])

  public getPortalElements():Observable<string[]>
  {
    return this._portalElements$;
  }

  public getTypelElements():Observable<string[]>
  {
    return this._typeElements$;
  }

}
