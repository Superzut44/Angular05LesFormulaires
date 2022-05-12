import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-profile-component",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  User = {
    name: "Doe",
    firstName: "John",
    age: 25,
    quote: "",
    photo: "https://randomuser.me/api/portraits/lego/2.jpg"
  };

  isShow: boolean = true;
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
}
