import { Component, ElementRef, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent  {

  constructor(public d:DataService) { };

  remove(key:number)
  {
    this.d.removeElement(key);
  }
}
