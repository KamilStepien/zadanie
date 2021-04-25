import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuElementModel } from '../models/menuElement.model';
import { ToolTipElementModel } from '../models/toolTipElement.model';
import { DataService } from './data.service';



@Injectable({
  providedIn: 'root'
})

export class MenuService {



  private menuElements:Map<number,MenuElementModel> = null;
  private _disableMenu:boolean = true;
  private _select:MenuElementModel = null;
  private _lastSelect = this._select;

  private navigate():void
  {
    if(this._select.disable == false)
    this.r.navigate([this._select.routerLink]);
  }

  private select(key:number)
  {
    this.selectStep(key);
  }

  private summary()
  {
    this.d.addElement();

  }
  constructor(private r:Router, private d:DataService ){
    this.menuElements = new Map<number,MenuElementModel>([
      [1,new MenuElementModel(1,"Definition","/definition",true,false,false,()=>this.select(1),null,true)],
      [2,new MenuElementModel(2,"Choose products","/",false,true,false,()=>this.select(2),null)],
      [3,new MenuElementModel(3,"Exclude products","/",false,true,false,()=>this.select(3),null)],
      [4,new MenuElementModel(4,"Bonus products","/",false,true,true,()=>this.select(4),new ToolTipElementModel("Lorem ipsum dolor."))],
      [5,new MenuElementModel(5,"Product limits","/",false,true,true,()=>this.select(5),new ToolTipElementModel("Lorem ipsum dolor."))],
      [6,new MenuElementModel(6,"Choose cLients","/",false,true,false,()=>this.select(6),null)],
      [7,new MenuElementModel(7,"Exclude clients","/",false,true,false,()=>this.select(7),null)],
      [8,new MenuElementModel(8,"Clients limits","/",false,true,false,()=>this.select(8),null)],
      [9,new MenuElementModel(9,"Summary","/summary",false, false,false,()=>{this.select(9);this.summary()} ,null, true)]
      ]);
      this._select= this.menuElements.get(1);
  }



  public selectStep(key:number)
  {
    this._lastSelect = this._select;
    this._lastSelect.select= false;
    this._select = this.menuElements.get(key);
    this._select.select = true;
    this.navigate();
  }

  public disableMenu():void
  {
    if(this._disableMenu===false)
    {
      [...this.menuElements.values()].forEach(
        element => element.disable = true && !element.everAvailabe
      );
      this._disableMenu = true;
    }
  }

  public enableMenu():void
  {
    if(this._disableMenu===true)
    {
      [...this.menuElements.values()].forEach(
        element => element.disable = element.unavailable && element.disable
      );
      this._disableMenu = false;
    }
  }


  public getElements():Array<MenuElementModel>
  {
    return [...this.menuElements.values()]
  }






}
