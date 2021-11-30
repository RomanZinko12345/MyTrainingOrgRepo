import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class WireGetRecordProperty extends LightningElement {
    @api recordId;

    @wire
    (getRecord , {recordId :'$recordId' ,
                  fields: [ACCOUNT_NAME_FIELD,REVENUE_FIELD]
    })
    account;
    data;

    @wire(getRecord, { recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD] })
    wiredAccount({data, error}) {
        console.log('Execute logic each time a new value is provisioned');
        console.log('Execute logic each time a new value is provisioned3');
        console.log('Execute logic each time a new value is provisioned4');
        if (data) {
            console.log(data);
            this.data = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
        console.log('Execute logic each time a new value is provisioned5');
    }

    get getAccountName(){
        console.log(this.account.data);
        console.log(this.account.data.fields.Name.value);

        return this.account.data.fields.Name.value;

    }
}