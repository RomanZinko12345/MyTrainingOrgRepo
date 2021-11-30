import {LightningElement, api ,track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import getContactList from '@salesforce/apex/AccountController.getContactList';

export default class PromiseTest extends LightningElement {

    @track contacts;
    @track accounts;

    handleLoad() {
        getAccountList()
            .then(result => {
                this.contacts = result
            })
        getContactList()
            .then(result => {
                this.accounts = result
            })

        console.log(this.contacts)
        console.log(this.contacts)
    }




}