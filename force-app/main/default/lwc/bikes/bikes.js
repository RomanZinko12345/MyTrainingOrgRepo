import {LightningElement, api} from 'lwc';

export default class Bikes extends LightningElement {

    name = 'Electra X4';
    description = 'A sweet bike built for comfort.';
    category = 'Mountain';
    material = 'Steel';
    price = '$2,800';
    pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'
    ready = false;
     @api bike;

    connectedCallback(){
        setTimeout(()=>{
            console.log('this is '+this)
            this.ready = true
        },3000)
    }



    newFun (){
        setTimeout(()=>{
            console.log('this insede method'+this)
            this.ready = true
        },1000)
    }

}