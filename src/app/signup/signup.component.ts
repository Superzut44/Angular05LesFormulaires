import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: User = new User();

  constructor() { }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

  ngOnInit(): void {
  }
}
