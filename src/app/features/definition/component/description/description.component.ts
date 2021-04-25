import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map } from 'rxjs/operators';
import { DescriptionModel } from 'src/app/shared/models/description.model';
import { DataService } from 'src/app/shared/service/data.service';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';
import { MenuService } from 'src/app/shared/service/menu.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnDestroy {

  descriptionForm = this.fb.group(
    {
      marketingName:['',[Validators.required]],
      technicalName:[''],
      description:[''],
    }
  )

  constructor(private fb:FormBuilder, private ms:MenuService, private ls:LocalstorageService, private d:DataService, private ar:ActivatedRoute){

    this.d.descriptionForm = this.descriptionForm;

    let descriptionModel:DescriptionModel = null;

    if(this.ar.snapshot.params.id!= undefined)
    {
      descriptionModel = this.d.getDescription(Number(this.ar.snapshot.params.id));
    }
    else
    {
      descriptionModel = ls.getDescriptio();
    }

    this.descriptionForm.setValue({
      marketingName:descriptionModel?.marketingName || "",
      technicalName:descriptionModel?.technicalName || "",
      description:descriptionModel?.description || ""
    })
  }


  descriptionFormSubscribe = this.descriptionForm.valueChanges.pipe(debounceTime(500))
  .subscribe(
    ()=>
    {
      if(this.descriptionForm.value.marketingName!=''
      || this.descriptionForm.value.technicalName!= '')
      {
        this.ms.enableMenu();
      }
      else
      {
        this.ms.disableMenu();
      }

      this.ls.saveDescription(this.descriptionForm.value);

    }
    );

  ngOnDestroy(): void {
    this.descriptionFormSubscribe.unsubscribe();
  }

}
