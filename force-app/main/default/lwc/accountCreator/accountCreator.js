import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class AccountCreator extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD ,REVENUE_FIELD, INDUSTRY_FIELD];

    handleSuccess (event){
        console.log(event.detail);
        console.log(JSON.parse(JSON.stringify(event.detail.fields.Name.value)));
        console.log(JSON.parse(JSON.stringify(event.detail)));
      const event1 = new ShowToastEvent({
          title : 'is Craated',
          message : 'for : '+event.detail.fields.Name.value,
          variant : "success"
      });
        this.dispatchEvent(event1);
    }



}