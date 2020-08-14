import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ExternalConnectionCreateRequest, ExternalConnectionCreateRes} from '../../grpc/SittelleServiceClient_pb';
import * as grpcWeb from 'grpc-web';
import { GrpcService } from '../../services/grpc.service';
import { ClientServiceClient } from '../../grpc/SittelleServiceClientServiceClientPb';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  validateForm: FormGroup;
  private readonly ClientServiceClient: ClientServiceClient;
  errorLogin = false;

  submitForm(): void {
    console.log(this.validateForm);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      this.start(this.validateForm.value.userName, this.validateForm.value.password);
      // for (let i = 0; i < 10000; i++) {
      // }
    }
  }

  private start(user, pass) {
    const req = new ExternalConnectionCreateRequest();
    req.setUser(user);
    req.setPassword(pass);

    const call = this.ClientServiceClient.externalConnectionCreate(req, null,
      (err: grpcWeb.Error, response: ExternalConnectionCreateRes) => {
        // console.log(response, err);
        if (err) {
          if (err.code === 16) {
            this.errorLogin = true;
          }
          return;
        }
        const data = response.toObject();
        this.auth.setSess(data);
        // this.router.navigateByUrl((this.route.snapshot.params.to) ? this.route.snapshot.params.to : '/dashboard')
        //   .then(r => this.qw.getMenuItems());
      });
    call.on('status', (status: grpcWeb.Status) => {
      console.log(status);
    });
  }

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private auth: AuthService, private Grpc: GrpcService, private route: ActivatedRoute, private router: Router) {
    if (!this.ClientServiceClient) {
      this.ClientServiceClient = Grpc.ClientServiceClient;
    }
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
