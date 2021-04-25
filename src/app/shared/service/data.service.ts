import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConditionsModel } from '../models/conditions.model';
import { DescriptionModel } from '../models/description.model';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private _counter = 0;
  private _data:Map<number,(DescriptionModel & ConditionsModel)> = new Map<number,(DescriptionModel & ConditionsModel)>([])
  private _actualElemet:number = -1;
  private _descriptionForm:FormGroup;
  private _conditionForm:FormGroup;

  get descriptionForm() {return this._descriptionForm};
  set descriptionForm(descriptionForm:FormGroup)
  {
    this._descriptionForm = descriptionForm;
  }
  get conditionForm() {return this._conditionForm};
  set conditionForm(conditionForm:FormGroup)
  {
    this._conditionForm = conditionForm;
  }
  get data() {return this._data};
  constructor(private ls:LocalstorageService){};

  private get(key:number):any
  {
    this._actualElemet = key;
    return this._data.get(key);
  }

  validForms():boolean
  {
    return this.descriptionForm?.valid && this.conditionForm?.valid
  }

  getKeys():number[]
  {
    return Array.from(this._data.keys())
  }

  getDescription(key:number):DescriptionModel
  {
    return this.get(key);
  }

  getConditions(key:number):ConditionsModel
  {
    return this.get(key);
  }

  addElement():void
  {

    if(this.validForms())
    {
      this._data.set((this._actualElemet<0)?this._counter++:this._actualElemet,{...this.descriptionForm.value, ...this._conditionForm.value });
      this.descriptionForm.reset();
      this.conditionForm.reset();
      this.ls.cleanLocalStorage();
      this._actualElemet = -1 ;
    }
  }

  removeElement(key:number):void
  {
    this._data.delete(key);
  }








}
