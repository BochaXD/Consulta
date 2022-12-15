import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../servicios/basedatos.service';
import { User } from '../interfaces/usuarios';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user: User[] = [];
  public local: any = [];
  singupObject: any = {
    userName: '',
    email: '',
    password: '',
  };
  loginObject: any = {
    userName: '',
    email: '',
    password: '',
  };
  constructor(private firestormService: FirestoreService) {}

  ngOnInit() {
    this.firestormService.getUser().subscribe((prod: any[]) => {
      this.user = prod;
    });
  }

  onLogin() {
    const isUserExist = this.user.find(
      (m: any) =>
        m.userName == this.loginObject.userName &&
        m.password == this.loginObject.password &&
        m.email == this.loginObject.email
    );
    if (isUserExist != undefined) {
      console.log(isUserExist);
      location.href = 'tabs/home';
      let transactionObjJson = JSON.stringify(this.loginObject);
      localStorage.setItem('user', transactionObjJson);
      console.log(this.loginObject.email, this.loginObject.userName);
    } else {
      console.log(this.user);
      console.log(this.loginObject.email);
    }
  }
}
