import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
})
export class UserStoreComponent implements OnInit {
  form: FormGroup;
  user: User = {} as User;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getUser();
  }
  getUser(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.service.getOne(this.id)
        .subscribe(user => {
          this.user = user;
          this.form.patchValue(this.user);
        });
    }
  }

  submit() {

    Object.assign(this.user, this.form.value);
    if(this.id){
      this.service.update(this.id, this.user).subscribe(
        data => this.router.navigate(['/users']),
        err => console.log(err)
      )
    }else{
      this.service.save(this.user).subscribe(
        data => this.router.navigate(['/users']),
        err => console.log(err)
      )
    }
  }

}
