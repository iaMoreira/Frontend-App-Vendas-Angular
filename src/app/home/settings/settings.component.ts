import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  form: FormGroup;


  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'currentPassword': ['', Validators.required],
      'newPassword': ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  submit() {

    const credentials = this.form.value;
    this.authService
      .changePassword(credentials)
      .subscribe(
        data => this.router.navigateByUrl('/'),
        err => {
          console.log(err);
        }
      );
  }

}
