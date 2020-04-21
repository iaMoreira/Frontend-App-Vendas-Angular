import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.getAll()
  }

  getAll(){
    this.service.getAll().subscribe(data => this.users = data.content);
  }

  delete(id) {
    this.service.delete(id).subscribe(() => this.getAll());
  }

}
