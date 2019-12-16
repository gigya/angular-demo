import { Component, OnInit } from '@angular/core';

declare let gigya: any;
declare let moment: any; //declare moment

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angularCDC';
  timz: any;
  login: any;
  loginParams = {
    screenSet: "Newones-RegistrationLogin",
    startScreen: "gigya-login-screen",
    containerID: "loginScreen"
  };

  constructor () {}

  ngOnInit() {
    console.log(gigya);
    gigya.accounts.showScreenSet(this.loginParams);
    this.timz = moment().format('YYYY MM DD');
  }

}