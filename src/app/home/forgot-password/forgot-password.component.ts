import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {

  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.form = this.fb.group({
      'email': ['', Validators.required],
    });
  }


  ngOnInit() {
  }

  submit() {

    this.loading();
    const credentials = this.form.value;
    this.apiService.post('/forgot-password', credentials)
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
    Swal.fire({
        title: 'Email de recuperação de senha enviado com Sucesso!',
        text: 'Verifica a sua sua caixa de email e acesse o link para recupara sua senha.',
        icon: 'success'
      });
  }

  loading(){
    Swal.fire({
      title: 'Aguarde!',
      text: 'Estamos enviando o email de recuperação de senha.',
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
