import { ToolTipElementModel } from "./toolTipElement.model";

export class MenuElementModel
{
  constructor(
    public digit:number,
    public name: string,
    public routerLink:string,
    public select:boolean,
    public disable:boolean,
    public unavailable:boolean,
    public onClick: Function,
    public tooltop:ToolTipElementModel,
    public everAvailabe = false ){}
}
