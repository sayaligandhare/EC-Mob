import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   this.auth.getJSON().subscribe(data => {
  //     console.log(data)
  //     localStorage.setItem("latlong",data);
  // });
  }

}
