import { Injectable } from '@angular/core';
import { ConditionsModel } from '../models/conditions.model';
import { DescriptionModel } from '../models/description.model';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private _lastDraftDescriptio:DescriptionModel = null;
  private _lastDraftConditions:ConditionsModel = null;

  get lastDraftDescriptio(){ return this._lastDraftDescriptio}l
  get lastDraftConditions(){return this._lastDraftConditions}



  public saveConditions(data:ConditionsModel):void
  {
    this.setLocalStorege("dataConditions", data);
  }
  public getConditions():ConditionsModel
  {
    this._lastDraftConditions= this.getLocalStorage("dataConditions");
    return  this._lastDraftConditions;
  }

  public saveDescription(data:DescriptionModel):void
  {
    this.setLocalStorege("dataDescriptio", data);
  }

  public getDescriptio():DescriptionModel
  {
    this._lastDraftDescriptio = this.getLocalStorage("dataDescriptio");
    return this._lastDraftDescriptio ;
  }

  public cleanLocalStorage():void
  {
    localStorage.clear();
  }

  private setLocalStorege(key:string,data:any):void
  {
    localStorage.setItem(key,JSON.stringify(data));
  }

  private getLocalStorage(key:string):any
  {
    return JSON.parse(localStorage.getItem(key));
  }



}
