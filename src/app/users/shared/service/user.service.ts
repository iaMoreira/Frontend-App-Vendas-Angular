import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {

  baseUrl = this.baseUrl + '/users';  // Url da api

}
