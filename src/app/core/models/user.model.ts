import { BaseModel } from './base.model';

export class User extends BaseModel {
  name: String;
  email: String;
  access_token: String;
}
