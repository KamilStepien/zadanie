import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './features/menu/component/item/item.component';
import { MenuComponent } from './features/menu/menu.component';
import { TooltipComponent } from './shared/component/tooltip/tooltip.component';
import { DefinitionComponent } from './features/definition/definition.component';
import { SummaryComponent } from './features/summary/summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuService } from './shared/service/menu.service';
import { LocalstorageService } from './shared/service/localstorage.service';
import { ConditionsComponent } from './features/definition/component/conditions/conditions.component';
import { DescriptionComponent } from './features/definition/component/description/description.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {DpDatePickerModule} from 'ng2-date-picker';
import { ApiService } from './shared/service/api.service';
import { DataService } from './shared/service/data.service';


@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    MenuComponent,
    ItemComponent,
    DefinitionComponent,
    SummaryComponent,
    ConditionsComponent,
    DescriptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DpDatePickerModule,

  ],
  providers: [MenuService,LocalstorageService,ApiService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
