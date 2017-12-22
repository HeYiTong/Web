import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import {FormsModule, ReactiveFormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'sign',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  title = 'PicWeb';
  validateForm: FormGroup;


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userservice: UserService) {
    this.validateForm = fb.group({
    id: ['', [Validators.required]],
    password: ['', [Validators.required]]
    });
    }

  onsubmit() {
    if (this.validateForm.valid) {
      this.userservice.validateLogin(this.validateForm.controls['id'].value,
                                      this.validateForm.controls['password'].value).subscribe(data => {
        if (data['code'] === 2) {
          alert("成功");
        } else if (data['code'] === 0) {
          alert('fail');
          this.resetForm();
        } else if (data['code'] === 8) {
          alert('密码错误');
          this.resetForm();
        }
      });
    }
  }
  /**
   * 重置登录表单
   * */
  resetForm() {
    this.validateForm.reset();
  }
}
