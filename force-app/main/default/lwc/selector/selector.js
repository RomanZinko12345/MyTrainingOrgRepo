import { LightningElement } from 'lwc';

export default class Selector extends LightningElement {

    selectedBikeId;

    handleBikeDetail(event){
        console.log('here')
        console.log(event.detail);
        this.selectedBikeId = event.detail;
    }
}