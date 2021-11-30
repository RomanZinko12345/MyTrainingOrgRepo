import { LightningElement, api } from 'lwc';
import { bikes } from 'c/data';


export default class Detail extends LightningElement {
    _productId;

    product;


    set productId(value){
        this._productId = value
       this.product = bikes.find(bike => bike.fields.Id.value === value )
    }


    @api get productId(){
        console.log('insede')
      return this._productId;
    }


}