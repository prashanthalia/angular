import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  username:string = " ";
  password:string = "";
  msg:string = "";
  CheckLogin(txt1){
    if (this.username == "admin" && this.password == "12345")
    {
     alert("successfull");
    }
    else
    {
      alert("sinvalid");
    }
  }
}
