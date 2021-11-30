import { LightningElement, api } from 'lwc';

export default class Tile extends LightningElement {
    @api product

    selectBike(){
        console.log(this.product.fields.Id.value);
        const selectedEvent = new CustomEvent("singlebicycle",
            {
               detail : this.product.fields.Id.value
            });
        this.dispatchEvent(selectedEvent);
    }
}


// product.fields.Name.value
// product.fields.Id.value
// product.fields.Picture_URL__c.value