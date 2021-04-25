import { Component } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/shared/service/data.service';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { MenuService } from 'src/app/shared/service/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {


  public wrapMenu$ :Observable<boolean>;

  constructor(public ms:MenuService, private mo: MediaObserver, private d:DataService , private ls:LocalstorageService)
  {
     this.wrapMenu$  = this.mo.media$.pipe(map(mediaChange=>
      {
        return (mediaChange.mqAlias == 'sm' || mediaChange.mqAlias == 'xs' )?true:false;
      }));

  }




}
