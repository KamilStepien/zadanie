import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { ConditionsModel } from 'src/app/shared/models/conditions.model';
import { ApiService } from 'src/app/shared/service/api.service';
import { DataService } from 'src/app/shared/service/data.service';
import { LocalstorageService } from 'src/app/shared/service/localstorage.service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss']
})
export class ConditionsComponent implements OnDestroy  {

  constructor(private fb:FormBuilder,private ls:LocalstorageService, public a:ApiService, private d:DataService, private ar:ActivatedRoute) {

    this.d.conditionForm = this.conditionForm;
    let conditionsModel:ConditionsModel = null;

    if(this.ar.snapshot.params.id!= undefined)
    {
      conditionsModel = this.d.getConditions(Number(this.ar.snapshot.params.id));
    }
    else
    {
      conditionsModel = ls.getConditions();
    }

    this.conditionForm.setValue(
      {
        portal: conditionsModel?.portal||"",
        type:conditionsModel?.type||"",
        timePeriod:{
          start:conditionsModel?.timePeriod?.start||"",
          finish: conditionsModel?.timePeriod?.finish||""
        },
        conditions:conditionsModel?.conditions||"",
        connectionWithPromotions:conditionsModel?.connectionWithPromotions||false,
        backPromotion:conditionsModel?.backPromotion||false
      }
    )
   }


  conditionForm = this.fb.group(
    {
      portal:['',Validators.required],
      type:['',Validators.required],
      timePeriod: this.fb.group(
        {
          start: [''],
          finish: ['']
        }
      ),
      conditions:[''],
      connectionWithPromotions:[''],
      backPromotion:['']
    }
  )

  conditionSubscribe = this.conditionForm.valueChanges.pipe(
    debounceTime(500)).subscribe(()=>
      {
        this.ls.saveConditions(this.conditionForm.value);
      }
    )

   ngOnDestroy(): void {
    this.conditionSubscribe.unsubscribe();
  }



}
