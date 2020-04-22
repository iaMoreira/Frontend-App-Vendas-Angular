import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent implements OnInit {

  token: String;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.form = this.fb.group({
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log(this.token);
    });
  }

  submit() {

    this.loading();
    var credentials = this.form.value;
    credentials['token'] = this.token;
    console.log(credentials);
    this.apiService.post('/reset-password', credentials)
    .subscribe(
      data => {
        this.success();
        this.form.reset();
      },
      err => {
        Swal.close();
        this.err(err.message);
      }
    );
  }
  success()
  {
    let timerInterval
    Swal.fire({
      title: 'Senha alterada com sucesso!',
      html: 'Você será redirecionado para tela de login em <b></b> milisegundos.',
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        Swal.showLoading()
        timerInterval = setInterval(() => {
          const content = Swal.getContent()
          if (content) {
            const b = content.querySelector('b')
            if (b) {
              b.textContent = Swal.getTimerLeft()
            }
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        this.router.navigateByUrl('/login');
      }
    })
  }

  loading(){
    Swal.fire({
      title: 'Aguarde!',
      text: 'Sua senha está sendo alterada.',
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    });

  }

  err(msg : String){
    Swal.fire({
      icon: 'error',
      title: 'Aconteceu algo inesperado!',
      text: msg,
      footer: '<a href>Why do I have this issue?</a>'
    })
  }
}
