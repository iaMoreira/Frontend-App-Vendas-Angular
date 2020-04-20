import { BaseModel } from '../../../core/models/base.model';

export class Product extends BaseModel {
  name: String;
  price: Number;
  description: String;

  constructor(name: String, price: Number, description: String ){
    super();
    this.name = name;
    this.price = price;
    this.description = description;
  }

}
