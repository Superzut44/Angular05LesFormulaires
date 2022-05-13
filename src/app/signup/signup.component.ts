import { Component, OnInit } from '@angular/core';
import { Order } from '../order';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: Order = new Order();

  constructor() { }

  onSubmit() {
    // form submitted
    console.log(this.model);
  }

  ngOnInit(): void {
  }

}
