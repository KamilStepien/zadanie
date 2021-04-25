import { Component, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {

  private _digit:string = "";
  private _name:string = "";
  private _select:boolean = false;
  private _disable:boolean = false;
  private _wrap:boolean = false;

    @Input()
    get digit():string {return this._digit}
    set digit(digit:string)
    {
      this._digit = digit || '';
    }
    @Input()
    get name():string {return this._name}
    set name(name:string)
    {
      this._name = name || '';
    }
    @Input()
    get select(): boolean {return this._select}
    set select(select:boolean)
    {
      this._select = Boolean(select) || false;
    }
    @Input()
    get disable(): boolean {return this._disable}
    set disable(disable:boolean)
    {
      this._disable = Boolean(disable) || false;
    }
    @Input()
    get wrap(): boolean {return this._wrap}
    set wrap(wrap:boolean)
    {
      this._wrap = Boolean(wrap) || false;
    }


    @Output() onSelect: EventEmitter<ItemComponent> = new EventEmitter<ItemComponent>()

    @HostListener("click") OnClick(){

      if(this.disable!=true)
      {
        this.onSelect.emit(this);
        this.select = true;
      }

    }


}
