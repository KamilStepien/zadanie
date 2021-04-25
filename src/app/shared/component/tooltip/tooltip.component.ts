import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent  {

 @Input()
 get text(){return this._text}
 set text(text:string)
 {
   this._text = text||"";
 }
 //Text orientation - left,right
 @Input()
 get textOrientation(){return this._textOrientation}
 set textOrientation(textOrientation:string)
 {
   if(textOrientation != null && (textOrientation == "left" || textOrientation =="right" ))
    this._textOrientation = textOrientation
   else
    this.textOrientation = "left"

 }


 public _text:string = "";
 public _textOrientation: string = "left"
}
