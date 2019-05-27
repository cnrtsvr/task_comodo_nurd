import { Component, Input, OnInit } from '@angular/core';
import { User } from '../User';
import { InfoComponent } from '../info/info.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user: User;

  constructor() { }

  ngOnInit() {
  }
  @Input() info: InfoComponent;
  
  onSubmit(value) { 
    this.user = new User(value.username, value.firstName, value.lastName, value.email, value.password);
    if(value) {
    	if(!localStorage.getItem(this.user.username)){
      		localStorage.setItem(this.user.username, JSON.stringify(this.user));
      		this.info.changeText("User added successfully.");
    	}
    	else{
    		this.info.changeText("User already exists.");
    	}
    }
  }
}
