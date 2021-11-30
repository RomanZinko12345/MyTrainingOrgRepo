import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';

export default class List extends LightningElement {
    bikes = bikes;


    handleEverySingleBike(event){
        console.log(event.detail)
           const selectedEvent = new CustomEvent("showbikedetail" , {
                 detail : event.detail
           });

           this.dispatchEvent(selectedEvent);
    }


}