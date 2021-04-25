import { TimePeriodModel } from "./timePeriod.model";

export class ConditionsModel
{
  constructor(
    public portal:string,
    public type: string,
    public timePeriod: TimePeriodModel,
    public conditions: boolean,
    public connectionWithPromotions:boolean,
    public backPromotion:boolean
  ){};
}
