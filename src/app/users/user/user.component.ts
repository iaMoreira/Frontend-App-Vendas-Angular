import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  user: User;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: UserService
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.service.getOne(this.id)
      .subscribe(user => this.user = user);
  }

}
