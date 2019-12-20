import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  type= ''
  loginForm:FormGroup

  constructor(ar: ActivatedRoute, private router: Router,) {
    this.type = ar.snapshot.params['type']
    this.loginForm = new FormGroup({
      email:new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    const emailForm = this.loginForm.get('email').value
    const passForm = this.loginForm.get('password').value
    this.router.navigateByUrl('login/' + this.type)
  }

  ngOnInit() {
  }
}
